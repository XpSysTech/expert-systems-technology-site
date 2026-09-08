namespace XpSys.PublicWebsite.Api.Contracts.Enquiries;

public sealed record PlatformOrganisationRequest(
    string Organisation,
    string Industry,
    string IndustryOther,
    string Location,
    string ContactPerson);

public sealed record PlatformDefinitionRequest(IReadOnlyList<string> PlatformTypes, string PlatformTypeOther);

public sealed record PlatformUsersRequest(IReadOnlyList<string> Roles, string EstimatedUsers);

public sealed record PlatformFunctionsRequest(IReadOnlyList<string> Requirements, string RequirementOther);

public sealed record PlatformIntegrationsRequest(
    string ExistingSystems,
    string ThirdPartyApis,
    string PaymentProviders,
    string CrmErp,
    bool Unknown);

public sealed record PlatformDataRequest(string StoredInformation, string SensitiveDataExpected, string MigrationNeeds);

public sealed record PlatformSecurityRequest(
    string LoginRequired,
    string RolesPermissions,
    string MfaDesired,
    string OrganisationOnly,
    string MixedAreas);

public sealed record PlatformUsageRequest(string Users, string Interactions, string Geography, string Criticality);

public sealed record PlatformExistingSystemsRequest(
    string CurrentSystem,
    string MigrationRequired,
    string Hosting,
    string Database,
    string ProjectScope);

public sealed record EnquiryContactRequest(
    string Name,
    string Email,
    string Phone,
    string Preference,
    bool Consent);

public sealed record ManagedWebPlatformEnquiryRequest(
    PlatformOrganisationRequest Organisation,
    PlatformDefinitionRequest Platform,
    PlatformUsersRequest Users,
    PlatformFunctionsRequest Functions,
    PlatformIntegrationsRequest Integrations,
    PlatformDataRequest Data,
    PlatformSecurityRequest Security,
    PlatformUsageRequest Usage,
    PlatformExistingSystemsRequest ExistingSystems,
    EnquiryContactRequest Contact);

public sealed record WebsiteOrganisationRequest(string Organisation, string Industry, string CurrentWebsite);

public sealed record WebsiteProjectRequest(
    string WebsiteType,
    IReadOnlyList<string> Goals,
    string OtherGoal);

public sealed record WebsiteContentRequest(string ApproximatePages, string ContentStatus, string Functionality);

public sealed record WebsiteOperationRequest(string LaunchWindow, string UpdateFrequency, string ProjectScope);

public sealed record ManagedWebsiteEnquiryRequest(
    WebsiteOrganisationRequest Organisation,
    WebsiteProjectRequest Project,
    WebsiteContentRequest Content,
    WebsiteOperationRequest Operation,
    EnquiryContactRequest Contact);

public sealed record CallbackContactRequest(
    string Name,
    string Organisation,
    string Phone,
    string Email,
    string BestTime,
    bool Consent);

public sealed record CallbackRequestRequest(string ServiceInterest, string ProjectScope);

public sealed record CallbackEnquiryRequest(CallbackContactRequest Contact, CallbackRequestRequest Request);

public sealed record ApplicationOrganisationRequest(string Organisation, string Industry, string IndustryOther);

public sealed record ApplicationRequirementsRequest(
    string BusinessProblem,
    string CurrentProcess,
    string ExpectedUserTypes,
    string ExpectedUserTypesOther,
    string ApproximateUsers,
    string KnownIntegrations,
    string KeyFunctionalRequirements,
    string OtherRequirements,
    string ProjectScope);

public sealed record ApplicationOperationsRequest(string OperationalCriticality, string ExpectedTimeline);

public sealed record ApplicationContactRequest(
    string ContactName,
    string Email,
    string Phone,
    string PreferredContactMethod,
    string PreferredContactOther,
    DateTimeOffset? ProposedDate,
    DateTimeOffset? ProposedTime,
    bool Consent);

public sealed record ManagedApplicationEnquiryRequest(
    ApplicationOrganisationRequest Organisation,
    ApplicationRequirementsRequest Requirements,
    ApplicationOperationsRequest Operations,
    ApplicationContactRequest Contact);

public sealed record SubmitManagedEnquiryResponse(Guid EnquiryId);
