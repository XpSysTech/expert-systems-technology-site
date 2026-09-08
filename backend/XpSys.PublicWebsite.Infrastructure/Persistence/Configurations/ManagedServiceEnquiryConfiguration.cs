using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using XpSys.PublicWebsite.Domain.Enquiries;

namespace XpSys.PublicWebsite.Infrastructure.Persistence.Configurations;

public sealed class ManagedServiceEnquiryConfiguration : IEntityTypeConfiguration<ManagedServiceEnquiry>
{
    public void Configure(EntityTypeBuilder<ManagedServiceEnquiry> builder)
    {
        builder.ToTable("managed_service_enquiries");
        builder.HasKey(enquiry => enquiry.Id);

        builder.Property(enquiry => enquiry.Id).HasColumnName("id");
        builder.Property(enquiry => enquiry.Type).HasColumnName("type").HasConversion<int>().IsRequired();
        builder.Property(enquiry => enquiry.Organisation).HasColumnName("organisation").HasMaxLength(160).IsRequired();
        builder.Property(enquiry => enquiry.ContactName).HasColumnName("contact_name").HasMaxLength(160).IsRequired();
        builder.Property(enquiry => enquiry.Email).HasColumnName("email").HasMaxLength(254).IsRequired();
        builder.Property(enquiry => enquiry.Phone).HasColumnName("phone").HasMaxLength(40).IsRequired();
        builder.Property(enquiry => enquiry.PreferredContactMethod).HasColumnName("preferred_contact_method").HasMaxLength(120).IsRequired();
        builder.Property(enquiry => enquiry.RequirementsJson).HasColumnName("requirements_json").HasColumnType("jsonb").IsRequired();
        builder.Property(enquiry => enquiry.SubmittedAtUtc).HasColumnName("submitted_at_utc").IsRequired();

        builder.HasIndex(enquiry => enquiry.SubmittedAtUtc)
            .HasDatabaseName("ix_managed_service_enquiries_submitted_at_utc");
        builder.HasIndex(enquiry => new { enquiry.Type, enquiry.SubmittedAtUtc })
            .HasDatabaseName("ix_managed_service_enquiries_type_submitted_at_utc");
    }
}
