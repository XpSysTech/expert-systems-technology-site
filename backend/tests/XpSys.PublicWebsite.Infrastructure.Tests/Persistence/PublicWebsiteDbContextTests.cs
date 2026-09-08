using FluentAssertions;
using Microsoft.EntityFrameworkCore;
using XpSys.PublicWebsite.Domain.Enquiries;
using XpSys.PublicWebsite.Infrastructure.Persistence;

namespace XpSys.PublicWebsite.Infrastructure.Tests.Persistence;

public sealed class PublicWebsiteDbContextTests
{
    [Fact]
    public void Model_MapsManagedEnquiryPayloadAsPostgreSqlJson()
    {
        var options = new DbContextOptionsBuilder<PublicWebsiteDbContext>()
            .UseNpgsql("Host=localhost;Database=xpsys_model_test")
            .Options;
        using var context = new PublicWebsiteDbContext(options);

        var entity = context.Model.FindEntityType(typeof(ManagedServiceEnquiry));
        entity.Should().NotBeNull();
        if (entity is null)
        {
            throw new InvalidOperationException("The managed enquiry entity is not mapped.");
        }

        var table = entity.GetTableName();
        var requirements = entity.FindProperty(nameof(ManagedServiceEnquiry.RequirementsJson));

        table.Should().Be("managed_service_enquiries");
        requirements!.GetColumnType().Should().Be("jsonb");
        entity.GetIndexes().Should().HaveCount(2);
    }
}
