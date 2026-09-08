using Microsoft.AspNetCore.Mvc;
using XpSys.PublicWebsite.Api.Contracts.Enquiries;
using XpSys.PublicWebsite.Application.Enquiries;

namespace XpSys.PublicWebsite.Api.Controllers;

[ApiController]
[Route("api/v1/enquiries")]
public sealed class ManagedEnquiriesController(
    SubmitManagedWebPlatformEnquiryHandler platformHandler,
    SubmitManagedApplicationEnquiryHandler applicationHandler,
    SubmitManagedWebsiteEnquiryHandler websiteHandler,
    SubmitCallbackEnquiryHandler callbackHandler) : ControllerBase
{
    [HttpPost("managed-web-platform")]
    [ProducesResponseType<SubmitManagedEnquiryResponse>(StatusCodes.Status201Created)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status503ServiceUnavailable)]
    public async Task<IActionResult> SubmitManagedWebPlatform(
        ManagedWebPlatformEnquiryRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await platformHandler.HandleAsync(Map(request), cancellationToken);
            return ToActionResult(result);
        }
        catch (InvalidOperationException)
        {
            return Problem(
                statusCode: StatusCodes.Status503ServiceUnavailable,
                title: "Managed enquiry delivery is not configured.");
        }
    }

    [HttpPost("managed-application")]
    [ProducesResponseType<SubmitManagedEnquiryResponse>(StatusCodes.Status201Created)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status503ServiceUnavailable)]
    public async Task<IActionResult> SubmitManagedApplication(
        ManagedApplicationEnquiryRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await applicationHandler.HandleAsync(Map(request), cancellationToken);
            return ToActionResult(result);
        }
        catch (InvalidOperationException)
        {
            return Problem(
                statusCode: StatusCodes.Status503ServiceUnavailable,
                title: "Managed enquiry delivery is not configured.");
        }
    }

    [HttpPost("managed-website")]
    [ProducesResponseType<SubmitManagedEnquiryResponse>(StatusCodes.Status201Created)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status503ServiceUnavailable)]
    public async Task<IActionResult> SubmitManagedWebsite(
        ManagedWebsiteEnquiryRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await websiteHandler.HandleAsync(Map(request), cancellationToken);
            return ToActionResult(result);
        }
        catch (InvalidOperationException)
        {
            return Problem(statusCode: StatusCodes.Status503ServiceUnavailable, title: "Managed enquiry delivery is not configured.");
        }
    }

    [HttpPost("callback")]
    [ProducesResponseType<SubmitManagedEnquiryResponse>(StatusCodes.Status201Created)]
    [ProducesResponseType<ValidationProblemDetails>(StatusCodes.Status400BadRequest)]
    [ProducesResponseType<ProblemDetails>(StatusCodes.Status503ServiceUnavailable)]
    public async Task<IActionResult> SubmitCallback(
        CallbackEnquiryRequest request,
        CancellationToken cancellationToken)
    {
        try
        {
            var result = await callbackHandler.HandleAsync(Map(request), cancellationToken);
            return ToActionResult(result);
        }
        catch (InvalidOperationException)
        {
            return Problem(statusCode: StatusCodes.Status503ServiceUnavailable, title: "Managed enquiry delivery is not configured.");
        }
    }

    private IActionResult ToActionResult(EnquirySubmissionResult result)
    {
        if (!result.IsSuccess)
        {
            return BadRequest(new ValidationProblemDetails(
                result.Errors.ToDictionary(pair => pair.Key, pair => pair.Value)));
        }

        var response = new SubmitManagedEnquiryResponse(result.EnquiryId!.Value);
        return Created($"/api/v1/enquiries/{response.EnquiryId}", response);
    }

    private static SubmitManagedWebPlatformEnquiry Map(ManagedWebPlatformEnquiryRequest request) =>
        new(
            new PlatformOrganisation(
                request.Organisation.Organisation,
                request.Organisation.Industry,
                request.Organisation.IndustryOther,
                request.Organisation.Location,
                request.Organisation.ContactPerson),
            new PlatformDefinition(request.Platform.PlatformTypes, request.Platform.PlatformTypeOther),
            new PlatformUsers(request.Users.Roles, request.Users.EstimatedUsers),
            new PlatformFunctions(request.Functions.Requirements, request.Functions.RequirementOther),
            new PlatformIntegrations(
                request.Integrations.ExistingSystems,
                request.Integrations.ThirdPartyApis,
                request.Integrations.PaymentProviders,
                request.Integrations.CrmErp,
                request.Integrations.Unknown),
            new PlatformData(
                request.Data.StoredInformation,
                request.Data.SensitiveDataExpected,
                request.Data.MigrationNeeds),
            new PlatformSecurity(
                request.Security.LoginRequired,
                request.Security.RolesPermissions,
                request.Security.MfaDesired,
                request.Security.OrganisationOnly,
                request.Security.MixedAreas),
            new PlatformUsage(
                request.Usage.Users,
                request.Usage.Interactions,
                request.Usage.Geography,
                request.Usage.Criticality),
            new PlatformExistingSystems(
                request.ExistingSystems.CurrentSystem,
                request.ExistingSystems.MigrationRequired,
                request.ExistingSystems.Hosting,
                request.ExistingSystems.Database,
                request.ExistingSystems.ProjectScope),
            new EnquiryContact(
                request.Contact.Name,
                request.Contact.Email,
                request.Contact.Phone,
                request.Contact.Preference,
                request.Contact.Consent));

    private static SubmitManagedApplicationEnquiry Map(ManagedApplicationEnquiryRequest request) =>
        new(
            new ApplicationOrganisation(
                request.Organisation.Organisation,
                request.Organisation.Industry,
                request.Organisation.IndustryOther),
            new ApplicationRequirements(
                request.Requirements.BusinessProblem,
                request.Requirements.CurrentProcess,
                request.Requirements.ExpectedUserTypes,
                request.Requirements.ExpectedUserTypesOther,
                request.Requirements.ApproximateUsers,
                request.Requirements.KnownIntegrations,
                request.Requirements.KeyFunctionalRequirements,
                request.Requirements.OtherRequirements,
                request.Requirements.ProjectScope),
            new ApplicationOperations(
                request.Operations.OperationalCriticality,
                request.Operations.ExpectedTimeline),
            new ApplicationContact(
                request.Contact.ContactName,
                request.Contact.Email,
                request.Contact.Phone,
                request.Contact.PreferredContactMethod,
                request.Contact.PreferredContactOther,
                request.Contact.ProposedDate,
                request.Contact.ProposedTime,
                request.Contact.Consent));

    private static SubmitManagedWebsiteEnquiry Map(ManagedWebsiteEnquiryRequest request) =>
        new(
            new WebsiteOrganisation(
                request.Organisation.Organisation,
                request.Organisation.Industry,
                request.Organisation.CurrentWebsite),
            new WebsiteProject(
                request.Project.WebsiteType,
                request.Project.Goals,
                request.Project.OtherGoal),
            new WebsiteContent(
                request.Content.ApproximatePages,
                request.Content.ContentStatus,
                request.Content.Functionality),
            new WebsiteOperation(
                request.Operation.LaunchWindow,
                request.Operation.UpdateFrequency,
                request.Operation.ProjectScope),
            new EnquiryContact(
                request.Contact.Name,
                request.Contact.Email,
                request.Contact.Phone,
                request.Contact.Preference,
                request.Contact.Consent));

    private static SubmitCallbackEnquiry Map(CallbackEnquiryRequest request) =>
        new(
            new CallbackContact(
                request.Contact.Name,
                request.Contact.Organisation,
                request.Contact.Phone,
                request.Contact.Email,
                request.Contact.BestTime,
                request.Contact.Consent),
            new CallbackRequest(
                request.Request.ServiceInterest,
                request.Request.ProjectScope));
}
