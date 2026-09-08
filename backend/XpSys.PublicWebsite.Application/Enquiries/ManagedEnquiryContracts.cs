namespace XpSys.PublicWebsite.Application.Enquiries;

public sealed record PlatformOrganisation(
    string Organisation,
    string Industry,
    string IndustryOther,
    string Location,
    string ContactPerson);

public sealed record PlatformDefinition(IReadOnlyList<string> PlatformTypes, string PlatformTypeOther);

public sealed record PlatformUsers(IReadOnlyList<string> Roles, string EstimatedUsers);

public sealed record PlatformFunctions(IReadOnlyList<string> Requirements, string RequirementOther);

public sealed record PlatformIntegrations(
    string ExistingSystems,
    string ThirdPartyApis,
    string PaymentProviders,
    string CrmErp,
    bool Unknown);

public sealed record PlatformData(
    string StoredInformation,
    string SensitiveDataExpected,
    string MigrationNeeds);

public sealed record PlatformSecurity(
    string LoginRequired,
    string RolesPermissions,
    string MfaDesired,
    string OrganisationOnly,
    string MixedAreas);

public sealed record PlatformUsage(
    string Users,
    string Interactions,
    string Geography,
    string Criticality);

public sealed record PlatformExistingSystems(
    string CurrentSystem,
    string MigrationRequired,
    string Hosting,
    string Database,
    string ProjectScope);

public sealed record EnquiryContact(
    string Name,
    string Email,
    string Phone,
    string Preference,
    bool Consent);

public sealed record SubmitManagedWebPlatformEnquiry(
    PlatformOrganisation Organisation,
    PlatformDefinition Platform,
    PlatformUsers Users,
    PlatformFunctions Functions,
    PlatformIntegrations Integrations,
    PlatformData Data,
    PlatformSecurity Security,
    PlatformUsage Usage,
    PlatformExistingSystems ExistingSystems,
    EnquiryContact Contact);

public sealed record WebsiteOrganisation(string Organisation, string Industry, string CurrentWebsite);

public sealed record WebsiteProject(
    string WebsiteType,
    IReadOnlyList<string> Goals,
    string OtherGoal);

public sealed record WebsiteContent(string ApproximatePages, string ContentStatus, string Functionality);

public sealed record WebsiteOperation(
    string LaunchWindow,
    string UpdateFrequency,
    string ProjectScope);

public sealed record SubmitManagedWebsiteEnquiry(
    WebsiteOrganisation Organisation,
    WebsiteProject Project,
    WebsiteContent Content,
    WebsiteOperation Operation,
    EnquiryContact Contact);

public sealed record CallbackContact(
    string Name,
    string Organisation,
    string Phone,
    string Email,
    string BestTime,
    bool Consent);

public sealed record CallbackRequest(string ServiceInterest, string ProjectScope);

public sealed record SubmitCallbackEnquiry(CallbackContact Contact, CallbackRequest Request);

public sealed record ApplicationOrganisation(string Organisation, string Industry, string IndustryOther);

public sealed record ApplicationRequirements(
    string BusinessProblem,
    string CurrentProcess,
    string ExpectedUserTypes,
    string ExpectedUserTypesOther,
    string ApproximateUsers,
    string KnownIntegrations,
    string KeyFunctionalRequirements,
    string OtherRequirements,
    string ProjectScope);

public sealed record ApplicationOperations(string OperationalCriticality, string ExpectedTimeline);

public sealed record ApplicationContact(
    string ContactName,
    string Email,
    string Phone,
    string PreferredContactMethod,
    string PreferredContactOther,
    DateTimeOffset? ProposedDate,
    DateTimeOffset? ProposedTime,
    bool Consent);

public sealed record SubmitManagedApplicationEnquiry(
    ApplicationOrganisation Organisation,
    ApplicationRequirements Requirements,
    ApplicationOperations Operations,
    ApplicationContact Contact);

public sealed record EnquirySubmissionResult(
    Guid? EnquiryId,
    IReadOnlyDictionary<string, string[]> Errors)
{
    public bool IsSuccess => EnquiryId.HasValue && Errors.Count == 0;

    public static EnquirySubmissionResult Success(Guid enquiryId) =>
        new(enquiryId, new Dictionary<string, string[]>());

    public static EnquirySubmissionResult Invalid(Dictionary<string, string[]> errors) =>
        new(null, errors);
}
