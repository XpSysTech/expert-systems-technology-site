using Microsoft.EntityFrameworkCore;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Infrastructure.Persistence;

public sealed class PublicWebsiteDbContext(DbContextOptions<PublicWebsiteDbContext> options)
    : DbContext(options)
{
    public DbSet<ManagedServiceEnquiry> ManagedServiceEnquiries => Set<ManagedServiceEnquiry>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(PublicWebsiteDbContext).Assembly);
    }
}
