using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace XpSys.PublicWebsite.Infrastructure.Persistence.Migrations;

[DbContext(typeof(PublicWebsiteDbContext))]
partial class PublicWebsiteDbContextModelSnapshot : ModelSnapshot
{
    protected override void BuildModel(ModelBuilder modelBuilder)
    {
        modelBuilder
            .HasAnnotation("ProductVersion", "10.0.4")
            .HasAnnotation("Relational:MaxIdentifierLength", 63);

        modelBuilder.Entity("XpSys.PublicWebsite.Domain.Enquiries.ManagedServiceEnquiry", builder =>
        {
            builder.Property<Guid>("Id").HasColumnType("uuid").HasColumnName("id");
            builder.Property<string>("ContactName").IsRequired().HasMaxLength(160).HasColumnType("character varying(160)").HasColumnName("contact_name");
            builder.Property<string>("Email").IsRequired().HasMaxLength(254).HasColumnType("character varying(254)").HasColumnName("email");
            builder.Property<string>("Organisation").IsRequired().HasMaxLength(160).HasColumnType("character varying(160)").HasColumnName("organisation");
            builder.Property<string>("Phone").IsRequired().HasMaxLength(40).HasColumnType("character varying(40)").HasColumnName("phone");
            builder.Property<string>("PreferredContactMethod").IsRequired().HasMaxLength(120).HasColumnType("character varying(120)").HasColumnName("preferred_contact_method");
            builder.Property<string>("RequirementsJson").IsRequired().HasColumnType("jsonb").HasColumnName("requirements_json");
            builder.Property<DateTimeOffset>("SubmittedAtUtc").HasColumnType("timestamp with time zone").HasColumnName("submitted_at_utc");
            builder.Property<int>("Type").HasColumnType("integer").HasColumnName("type");

            builder.HasKey("Id");
            builder.HasIndex("SubmittedAtUtc").HasDatabaseName("ix_managed_service_enquiries_submitted_at_utc");
            builder.HasIndex("Type", "SubmittedAtUtc").HasDatabaseName("ix_managed_service_enquiries_type_submitted_at_utc");
            builder.ToTable("managed_service_enquiries");
        });
    }
}
