using System.Net.Mail;

namespace XpSys.PublicWebsite.Application.Enquiries;

internal static class ManagedEnquiryValidator
{
    public static Dictionary<string, string[]> Validate(SubmitManagedWebPlatformEnquiry command)
    {
        var errors = new Dictionary<string, string[]>();
        Required(errors, "organisation.organisation", command.Organisation.Organisation, 160);
        Required(errors, "organisation.industry", command.Organisation.Industry, 120);
        Required(errors, "organisation.location", command.Organisation.Location, 160);
        Required(errors, "organisation.contactPerson", command.Organisation.ContactPerson, 160);
        RequiredCollection(errors, "platform.platformTypes", command.Platform.PlatformTypes);
        RequiredCollection(errors, "users.roles", command.Users.Roles);
        Required(errors, "users.estimatedUsers", command.Users.EstimatedUsers, 120);
        RequiredCollection(errors, "functions.requirements", command.Functions.Requirements);
        Required(errors, "data.storedInformation", command.Data.StoredInformation, 1500);
        Required(errors, "usage.criticality", command.Usage.Criticality, 120);
        ValidateContact(errors, command.Contact);

        if (command.Organisation.Industry.Equals("Other", StringComparison.OrdinalIgnoreCase))
        {
            Required(errors, "organisation.industryOther", command.Organisation.IndustryOther, 1000);
        }

        if (command.Platform.PlatformTypes.Contains("other", StringComparer.OrdinalIgnoreCase))
        {
            Required(errors, "platform.platformTypeOther", command.Platform.PlatformTypeOther, 1000);
        }

        if (command.Functions.Requirements.Contains("other", StringComparer.OrdinalIgnoreCase))
        {
            Required(errors, "functions.requirementOther", command.Functions.RequirementOther, 1000);
        }

        return errors;
    }

    public static Dictionary<string, string[]> Validate(SubmitManagedApplicationEnquiry command)
    {
        var errors = new Dictionary<string, string[]>();
        Required(errors, "organisation.organisation", command.Organisation.Organisation, 160);
        Required(errors, "organisation.industry", command.Organisation.Industry, 120);
        Required(errors, "requirements.businessProblem", command.Requirements.BusinessProblem, 2500);
        Required(errors, "requirements.currentProcess", command.Requirements.CurrentProcess, 2000);
        Required(errors, "requirements.expectedUserTypes", command.Requirements.ExpectedUserTypes, 160);
        Required(errors, "requirements.approximateUsers", command.Requirements.ApproximateUsers, 120);
        Required(errors, "requirements.keyFunctionalRequirements", command.Requirements.KeyFunctionalRequirements, 2500);
        Required(errors, "operations.operationalCriticality", command.Operations.OperationalCriticality, 160);
        Required(errors, "operations.expectedTimeline", command.Operations.ExpectedTimeline, 160);
        Required(errors, "contact.contactName", command.Contact.ContactName, 160);
        Required(errors, "contact.email", command.Contact.Email, 254);
        Required(errors, "contact.phone", command.Contact.Phone, 40);
        Required(errors, "contact.preferredContactMethod", command.Contact.PreferredContactMethod, 120);

        if (!IsEmail(command.Contact.Email))
        {
            errors["contact.email"] = ["Enter a valid email address."];
        }

        if (!command.Contact.Consent)
        {
            errors["contact.consent"] = ["Consent is required."];
        }

        if (!command.Contact.ProposedDate.HasValue)
        {
            errors["contact.proposedDate"] = ["A proposed date is required."];
        }

        if (!command.Contact.ProposedTime.HasValue)
        {
            errors["contact.proposedTime"] = ["A proposed time is required."];
        }

        if (command.Organisation.Industry.Equals("Other", StringComparison.OrdinalIgnoreCase))
        {
            Required(errors, "organisation.industryOther", command.Organisation.IndustryOther, 1000);
        }

        if (command.Requirements.ExpectedUserTypes.Equals("Other", StringComparison.OrdinalIgnoreCase))
        {
            Required(errors, "requirements.expectedUserTypesOther", command.Requirements.ExpectedUserTypesOther, 1000);
        }

        if (command.Contact.PreferredContactMethod.Equals("Other", StringComparison.OrdinalIgnoreCase))
        {
            Required(errors, "contact.preferredContactOther", command.Contact.PreferredContactOther, 1000);
        }

        return errors;
    }

    public static Dictionary<string, string[]> Validate(SubmitManagedWebsiteEnquiry command)
    {
        var errors = new Dictionary<string, string[]>();
        Required(errors, "organisation.organisation", command.Organisation.Organisation, 160);
        Required(errors, "organisation.industry", command.Organisation.Industry, 120);
        Required(errors, "project.websiteType", command.Project.WebsiteType, 160);
        RequiredCollection(errors, "project.goals", command.Project.Goals);
        Required(errors, "content.approximatePages", command.Content.ApproximatePages, 120);
        Required(errors, "content.contentStatus", command.Content.ContentStatus, 160);
        Required(errors, "operation.launchWindow", command.Operation.LaunchWindow, 160);
        Required(errors, "operation.updateFrequency", command.Operation.UpdateFrequency, 160);
        ValidateContact(errors, command.Contact);
        return errors;
    }

    public static Dictionary<string, string[]> Validate(SubmitCallbackEnquiry command)
    {
        var errors = new Dictionary<string, string[]>();
        Required(errors, "contact.name", command.Contact.Name, 160);
        Required(errors, "contact.phone", command.Contact.Phone, 40);
        Required(errors, "contact.bestTime", command.Contact.BestTime, 160);
        Required(errors, "request.serviceInterest", command.Request.ServiceInterest, 160);

        if (!string.IsNullOrWhiteSpace(command.Contact.Email) && !IsEmail(command.Contact.Email))
        {
            errors["contact.email"] = ["Enter a valid email address."];
        }

        if (!command.Contact.Consent)
        {
            errors["contact.consent"] = ["Consent is required."];
        }

        return errors;
    }

    private static void ValidateContact(Dictionary<string, string[]> errors, EnquiryContact contact)
    {
        Required(errors, "contact.name", contact.Name, 160);
        Required(errors, "contact.email", contact.Email, 254);
        Required(errors, "contact.phone", contact.Phone, 40);
        Required(errors, "contact.preference", contact.Preference, 120);

        if (!IsEmail(contact.Email))
        {
            errors["contact.email"] = ["Enter a valid email address."];
        }

        if (!contact.Consent)
        {
            errors["contact.consent"] = ["Consent is required."];
        }
    }

    private static bool IsEmail(string value)
    {
        try
        {
            return new MailAddress(value).Address.Equals(value, StringComparison.OrdinalIgnoreCase);
        }
        catch (FormatException)
        {
            return false;
        }
    }

    private static void Required(
        Dictionary<string, string[]> errors,
        string key,
        string value,
        int maximumLength)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            errors[key] = ["This field is required."];
        }
        else if (value.Length > maximumLength)
        {
            errors[key] = [$"This field cannot exceed {maximumLength} characters."];
        }
    }

    private static void RequiredCollection(
        Dictionary<string, string[]> errors,
        string key,
        IReadOnlyCollection<string> values)
    {
        if (values.Count == 0)
        {
            errors[key] = ["Select at least one option."];
        }
    }
}
