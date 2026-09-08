using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Application.Enquiries;

public interface IManagedServiceEnquiryRepository
{
    Task AddAsync(ManagedServiceEnquiry enquiry, CancellationToken cancellationToken);
}
