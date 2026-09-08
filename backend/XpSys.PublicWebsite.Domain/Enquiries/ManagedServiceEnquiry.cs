namespace XpSys.PublicWebsite.Domain.Enquiries;

public enum ManagedServiceEnquiryType
{
    ManagedWebPlatform = 1,
    ManagedApplication = 2,
    ManagedWebsite = 3,
    Callback = 4
}

public sealed class ManagedServiceEnquiry
{
    private ManagedServiceEnquiry()
    {
    }

    private ManagedServiceEnquiry(
        Guid id,
        ManagedServiceEnquiryType type,
        string organisation,
        string contactName,
        string email,
        string phone,
        string preferredContactMethod,
        string requirementsJson,
        DateTimeOffset submittedAtUtc)
    {
        Id = id;
        Type = type;
        Organisation = organisation;
        ContactName = contactName;
        Email = email;
        Phone = phone;
        PreferredContactMethod = preferredContactMethod;
        RequirementsJson = requirementsJson;
        SubmittedAtUtc = submittedAtUtc;
    }

    public Guid Id { get; private set; }

    public ManagedServiceEnquiryType Type { get; private set; }

    public string Organisation { get; private set; } = string.Empty;

    public string ContactName { get; private set; } = string.Empty;

    public string Email { get; private set; } = string.Empty;

    public string Phone { get; private set; } = string.Empty;

    public string PreferredContactMethod { get; private set; } = string.Empty;

    public string RequirementsJson { get; private set; } = string.Empty;

    public DateTimeOffset SubmittedAtUtc { get; private set; }

    public static ManagedServiceEnquiry Create(
        ManagedServiceEnquiryType type,
        string organisation,
        string contactName,
        string email,
        string phone,
        string preferredContactMethod,
        string requirementsJson,
        DateTimeOffset submittedAtUtc)
    {
        ArgumentException.ThrowIfNullOrWhiteSpace(organisation);
        ArgumentException.ThrowIfNullOrWhiteSpace(contactName);
        ArgumentException.ThrowIfNullOrWhiteSpace(email);
        ArgumentException.ThrowIfNullOrWhiteSpace(phone);
        ArgumentException.ThrowIfNullOrWhiteSpace(preferredContactMethod);
        ArgumentException.ThrowIfNullOrWhiteSpace(requirementsJson);

        if (organisation.Length > 160)
        {
            throw new ArgumentOutOfRangeException(nameof(organisation), "Organisation cannot exceed 160 characters.");
        }

        if (email.Length > 254)
        {
            throw new ArgumentOutOfRangeException(nameof(email), "Email cannot exceed 254 characters.");
        }

        if (requirementsJson.Length > 100_000)
        {
            throw new ArgumentOutOfRangeException(nameof(requirementsJson), "Requirements payload is too large.");
        }

        return new ManagedServiceEnquiry(
            Guid.NewGuid(),
            type,
            organisation.Trim(),
            contactName.Trim(),
            email.Trim(),
            phone.Trim(),
            preferredContactMethod.Trim(),
            requirementsJson,
            submittedAtUtc.ToUniversalTime());
    }
}
