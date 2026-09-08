using FluentAssertions;
using NSubstitute;
using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Application.Tests.Enquiries;

public sealed class SubmitManagedEnquiryHandlerTests
{
    private readonly IManagedServiceEnquiryRepository repository =
        Substitute.For<IManagedServiceEnquiryRepository>();

    [Fact]
    public async Task PlatformHandleAsync_WithValidScope_PersistsEnquiry()
    {
        var handler = new SubmitManagedWebPlatformEnquiryHandler(repository, TimeProvider.System);

        var result = await handler.HandleAsync(ValidPlatformCommand(), CancellationToken.None);

        result.IsSuccess.Should().BeTrue();
        await repository.Received(1).AddAsync(
            Arg.Is<ManagedServiceEnquiry>(enquiry =>
                enquiry.Type == ManagedServiceEnquiryType.ManagedWebPlatform &&
                enquiry.RequirementsJson.Contains("Volunteer portal")),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task PlatformHandleAsync_WithOtherAndNoContext_ReturnsValidationError()
    {
        var command = ValidPlatformCommand() with
        {
            Platform = new PlatformDefinition(["other"], "")
        };
        var handler = new SubmitManagedWebPlatformEnquiryHandler(repository, TimeProvider.System);

        var result = await handler.HandleAsync(command, CancellationToken.None);

        result.IsSuccess.Should().BeFalse();
        result.Errors.Should().ContainKey("platform.platformTypeOther");
        await repository.DidNotReceive().AddAsync(
            Arg.Any<ManagedServiceEnquiry>(),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task ApplicationHandleAsync_WithoutConsent_ReturnsValidationError()
    {
        var command = ValidApplicationCommand() with
        {
            Contact = ValidApplicationCommand().Contact with { Consent = false }
        };
        var handler = new SubmitManagedApplicationEnquiryHandler(repository, TimeProvider.System);

        var result = await handler.HandleAsync(command, CancellationToken.None);

        result.Errors.Should().ContainKey("contact.consent");
    }

    [Fact]
    public async Task WebsiteHandleAsync_WithValidScope_PersistsEnquiry()
    {
        var command = new SubmitManagedWebsiteEnquiry(
            new WebsiteOrganisation("Example Organisation", "Healthcare", "https://example.com"),
            new WebsiteProject("Company website", ["Explain services"], ""),
            new WebsiteContent("10", "Draft content", "Contact form"),
            new WebsiteOperation("Within three months", "Monthly", "Responsive redesign"),
            new EnquiryContact("Example Person", "person@example.com", "0810000000", "Phone", true));
        var handler = new SubmitManagedWebsiteEnquiryHandler(repository, TimeProvider.System);

        var result = await handler.HandleAsync(command, CancellationToken.None);

        result.IsSuccess.Should().BeTrue();
        await repository.Received().AddAsync(
            Arg.Is<ManagedServiceEnquiry>(enquiry => enquiry.Type == ManagedServiceEnquiryType.ManagedWebsite),
            Arg.Any<CancellationToken>());
    }

    [Fact]
    public async Task CallbackHandleAsync_WithoutConsent_ReturnsValidationError()
    {
        var handler = new SubmitCallbackEnquiryHandler(repository, TimeProvider.System);
        var command = new SubmitCallbackEnquiry(
            new CallbackContact("Example Person", "Example Organisation", "0810000000", "", "Afternoon", false),
            new CallbackRequest("Managed Website", "Optional scope"));

        var result = await handler.HandleAsync(command, CancellationToken.None);

        result.Errors.Should().ContainKey("contact.consent");
    }

    private static SubmitManagedWebPlatformEnquiry ValidPlatformCommand() =>
        new(
            new PlatformOrganisation("Example Organisation", "Other", "Education", "Windhoek", "Example Person"),
            new PlatformDefinition(["other"], "Volunteer portal"),
            new PlatformUsers(["staff"], "50"),
            new PlatformFunctions(["authentication"], ""),
            new PlatformIntegrations("None", "Not sure", "None", "None", true),
            new PlatformData("Member profiles", "No", "None"),
            new PlatformSecurity("Yes", "Yes", "No", "Yes", "No"),
            new PlatformUsage("50", "Low volume", "Namibia", "Standard"),
            new PlatformExistingSystems("None", "No", "None", "Unknown", "Member portal scope"),
            new EnquiryContact("Example Person", "person@example.com", "0810000000", "WhatsApp", true));

    private static SubmitManagedApplicationEnquiry ValidApplicationCommand() =>
        new(
            new ApplicationOrganisation("Example Organisation", "Healthcare", ""),
            new ApplicationRequirements(
                "Replace a manual workflow",
                "Spreadsheet",
                "Staff",
                "",
                "50",
                "None",
                "Workflow and reporting",
                "",
                "Critical workflow scope"),
            new ApplicationOperations("Business critical", "3–6 months"),
            new ApplicationContact(
                "Example Person",
                "person@example.com",
                "0810000000",
                "WhatsApp",
                "",
                DateTimeOffset.UtcNow.AddDays(7),
                DateTimeOffset.UtcNow.AddHours(2),
                true));
}
