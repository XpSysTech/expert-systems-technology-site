using FluentAssertions;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Domain.Tests.Enquiries;

public sealed class ManagedServiceEnquiryTests
{
    [Fact]
    public void Create_WithValidValues_CreatesNormalisedEnquiry()
    {
        var timestamp = new DateTimeOffset(2026, 9, 1, 10, 0, 0, TimeSpan.FromHours(2));

        var enquiry = ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.ManagedWebPlatform,
            "  Example Organisation  ",
            "  Example Person  ",
            " person@example.com ",
            " 0810000000 ",
            " WhatsApp ",
            "{\"scope\":\"platform\"}",
            timestamp);

        enquiry.Id.Should().NotBeEmpty();
        enquiry.Organisation.Should().Be("Example Organisation");
        enquiry.ContactName.Should().Be("Example Person");
        enquiry.SubmittedAtUtc.Offset.Should().Be(TimeSpan.Zero);
    }

    [Fact]
    public void Create_WithoutOrganisation_RejectsInvalidState()
    {
        var action = () => ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.ManagedApplication,
            "",
            "Example Person",
            "person@example.com",
            "0810000000",
            "Email",
            "{}",
            DateTimeOffset.UtcNow);

        action.Should().Throw<ArgumentException>();
    }
}
