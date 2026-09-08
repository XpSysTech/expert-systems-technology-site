using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Domain.Enquiries;
using XpSys.PublicWebsite.Infrastructure.Persistence;

namespace XpSys.PublicWebsite.Infrastructure.Enquiries;

public sealed class ManagedServiceEnquiryRepository(PublicWebsiteDbContext dbContext)
    : IManagedServiceEnquiryRepository
{
    public async Task AddAsync(ManagedServiceEnquiry enquiry, CancellationToken cancellationToken)
    {
        dbContext.ManagedServiceEnquiries.Add(enquiry);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}
