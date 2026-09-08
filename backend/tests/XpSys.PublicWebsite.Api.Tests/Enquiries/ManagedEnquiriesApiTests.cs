using System.Net;
using System.Net.Http.Json;
using FluentAssertions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Testing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Logging;
using XpSys.PublicWebsite.Api.Contracts.Enquiries;
using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Api.Tests.Enquiries;

public sealed class ManagedEnquiriesApiTests : IClassFixture<ManagedEnquiriesApiTests.Factory>
{
    private readonly Factory factory;

    public ManagedEnquiriesApiTests(Factory factory)
    {
        this.factory = factory;
    }

    [Fact]
    public async Task ManagedWebPlatform_WithValidRequest_ReturnsCreated()
    {
        using var client = factory.CreateClient();

        var response = await client.PostAsJsonAsync(
            "/api/v1/enquiries/managed-web-platform",
            ValidPlatformRequest());

        response.StatusCode.Should().Be(HttpStatusCode.Created);
        var body = await response.Content.ReadFromJsonAsync<SubmitManagedEnquiryResponse>();
        body!.EnquiryId.Should().NotBeEmpty();
        factory.Repository.LastEnquiry!.Type.Should().Be(ManagedServiceEnquiryType.ManagedWebPlatform);
    }

    [Fact]
    public async Task ManagedWebPlatform_WithMissingOrganisation_ReturnsValidationProblem()
    {
        using var client = factory.CreateClient();
        var request = ValidPlatformRequest() with
        {
            Organisation = ValidPlatformRequest().Organisation with { Organisation = "" }
        };

        var response = await client.PostAsJsonAsync(
            "/api/v1/enquiries/managed-web-platform",
            request);

        response.StatusCode.Should().Be(HttpStatusCode.BadRequest);
        var body = await response.Content.ReadAsStringAsync();
        body.Should().Contain("organisation.organisation");
    }

    [Fact]
    public async Task ManagedWebsite_WithValidScope_ReturnsCreated()
    {
        using var client = factory.CreateClient();
        var request = new ManagedWebsiteEnquiryRequest(
            new WebsiteOrganisationRequest("Example Organisation", "Healthcare", "https://example.com"),
            new WebsiteProjectRequest("Company website", ["Explain services"], ""),
            new WebsiteContentRequest("10", "Draft content", "Contact form"),
            new WebsiteOperationRequest("Within three months", "Monthly", "Responsive redesign"),
            new EnquiryContactRequest("Example Person", "person@example.com", "0810000000", "Phone", true));

        var response = await client.PostAsJsonAsync("/api/v1/enquiries/managed-website", request);

        response.StatusCode.Should().Be(HttpStatusCode.Created);
        factory.Repository.LastEnquiry!.Type.Should().Be(ManagedServiceEnquiryType.ManagedWebsite);
    }

    [Fact]
    public async Task Callback_WithValidDetails_ReturnsCreated()
    {
        using var client = factory.CreateClient();
        var request = new CallbackEnquiryRequest(
            new CallbackContactRequest("Example Person", "Example Organisation", "0810000000", "", "Afternoon", true),
            new CallbackRequestRequest("Managed Website", "Optional scope"));

        var response = await client.PostAsJsonAsync("/api/v1/enquiries/callback", request);

        response.StatusCode.Should().Be(HttpStatusCode.Created);
        factory.Repository.LastEnquiry!.Type.Should().Be(ManagedServiceEnquiryType.Callback);
    }

    private static ManagedWebPlatformEnquiryRequest ValidPlatformRequest() =>
        new(
            new PlatformOrganisationRequest("Example Organisation", "Other", "Education", "Windhoek", "Example Person"),
            new PlatformDefinitionRequest(["other"], "Volunteer portal"),
            new PlatformUsersRequest(["staff"], "50"),
            new PlatformFunctionsRequest(["authentication"], ""),
            new PlatformIntegrationsRequest("None", "Not sure", "None", "None", true),
            new PlatformDataRequest("Member profiles", "No", "None"),
            new PlatformSecurityRequest("Yes", "Yes", "No", "Yes", "No"),
            new PlatformUsageRequest("50", "Low volume", "Namibia", "Standard"),
            new PlatformExistingSystemsRequest("None", "No", "None", "Unknown", "Member portal scope"),
            new EnquiryContactRequest("Example Person", "person@example.com", "0810000000", "WhatsApp", true));

    public sealed class Factory : WebApplicationFactory<Program>
    {
        public CapturingRepository Repository { get; } = new();

        protected override void ConfigureWebHost(IWebHostBuilder builder)
        {
            builder.ConfigureLogging(logging => logging.ClearProviders());
            builder.ConfigureServices(services =>
            {
                services.RemoveAll<IManagedServiceEnquiryRepository>();
                services.AddSingleton<IManagedServiceEnquiryRepository>(Repository);
            });
        }
    }

    public sealed class CapturingRepository : IManagedServiceEnquiryRepository
    {
        public ManagedServiceEnquiry? LastEnquiry { get; private set; }

        public Task AddAsync(ManagedServiceEnquiry enquiry, CancellationToken cancellationToken)
        {
            LastEnquiry = enquiry;
            return Task.CompletedTask;
        }
    }
}
