using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Infrastructure.Enquiries;

public sealed class UnavailableManagedServiceEnquiryRepository : IManagedServiceEnquiryRepository
{
    public Task AddAsync(ManagedServiceEnquiry enquiry, CancellationToken cancellationToken) =>
        throw new InvalidOperationException(
            "Managed enquiry persistence is unavailable until ConnectionStrings:PublicWebsite is configured.");
}
