using System.Text.Json;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Application.Enquiries;

public sealed class SubmitManagedWebPlatformEnquiryHandler(
    IManagedServiceEnquiryRepository repository,
    TimeProvider timeProvider)
{
    public async Task<EnquirySubmissionResult> HandleAsync(
        SubmitManagedWebPlatformEnquiry command,
        CancellationToken cancellationToken)
    {
        var errors = ManagedEnquiryValidator.Validate(command);
        if (errors.Count > 0)
        {
            return EnquirySubmissionResult.Invalid(errors);
        }

        var enquiry = ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.ManagedWebPlatform,
            command.Organisation.Organisation,
            command.Contact.Name,
            command.Contact.Email,
            command.Contact.Phone,
            command.Contact.Preference,
            JsonSerializer.Serialize(command),
            timeProvider.GetUtcNow());

        await repository.AddAsync(enquiry, cancellationToken);
        return EnquirySubmissionResult.Success(enquiry.Id);
    }
}

public sealed class SubmitManagedApplicationEnquiryHandler(
    IManagedServiceEnquiryRepository repository,
    TimeProvider timeProvider)
{
    public async Task<EnquirySubmissionResult> HandleAsync(
        SubmitManagedApplicationEnquiry command,
        CancellationToken cancellationToken)
    {
        var errors = ManagedEnquiryValidator.Validate(command);
        if (errors.Count > 0)
        {
            return EnquirySubmissionResult.Invalid(errors);
        }

        var enquiry = ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.ManagedApplication,
            command.Organisation.Organisation,
            command.Contact.ContactName,
            command.Contact.Email,
            command.Contact.Phone,
            command.Contact.PreferredContactMethod,
            JsonSerializer.Serialize(command),
            timeProvider.GetUtcNow());

        await repository.AddAsync(enquiry, cancellationToken);
        return EnquirySubmissionResult.Success(enquiry.Id);
    }
}

public sealed class SubmitManagedWebsiteEnquiryHandler(
    IManagedServiceEnquiryRepository repository,
    TimeProvider timeProvider)
{
    public async Task<EnquirySubmissionResult> HandleAsync(
        SubmitManagedWebsiteEnquiry command,
        CancellationToken cancellationToken)
    {
        var errors = ManagedEnquiryValidator.Validate(command);
        if (errors.Count > 0)
        {
            return EnquirySubmissionResult.Invalid(errors);
        }

        var enquiry = ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.ManagedWebsite,
            command.Organisation.Organisation,
            command.Contact.Name,
            command.Contact.Email,
            command.Contact.Phone,
            command.Contact.Preference,
            JsonSerializer.Serialize(command),
            timeProvider.GetUtcNow());

        await repository.AddAsync(enquiry, cancellationToken);
        return EnquirySubmissionResult.Success(enquiry.Id);
    }
}

public sealed class SubmitCallbackEnquiryHandler(
    IManagedServiceEnquiryRepository repository,
    TimeProvider timeProvider)
{
    public async Task<EnquirySubmissionResult> HandleAsync(
        SubmitCallbackEnquiry command,
        CancellationToken cancellationToken)
    {
        var errors = ManagedEnquiryValidator.Validate(command);
        if (errors.Count > 0)
        {
            return EnquirySubmissionResult.Invalid(errors);
        }

        var organisation = string.IsNullOrWhiteSpace(command.Contact.Organisation)
            ? "Callback request"
            : command.Contact.Organisation;
        var email = string.IsNullOrWhiteSpace(command.Contact.Email)
            ? "callback@not-provided.invalid"
            : command.Contact.Email;

        var enquiry = ManagedServiceEnquiry.Create(
            ManagedServiceEnquiryType.Callback,
            organisation,
            command.Contact.Name,
            email,
            command.Contact.Phone,
            "Callback",
            JsonSerializer.Serialize(command),
            timeProvider.GetUtcNow());

        await repository.AddAsync(enquiry, cancellationToken);
        return EnquirySubmissionResult.Success(enquiry.Id);
    }
}
