using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace XpSys.PublicWebsite.Infrastructure.Persistence.Migrations;

[DbContext(typeof(PublicWebsiteDbContext))]
[Migration("20260901133000_InitialManagedServiceEnquiries")]
public partial class InitialManagedServiceEnquiries : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.CreateTable(
            name: "managed_service_enquiries",
            columns: table => new
            {
                id = table.Column<Guid>(type: "uuid", nullable: false),
                type = table.Column<int>(type: "integer", nullable: false),
                organisation = table.Column<string>(type: "character varying(160)", maxLength: 160, nullable: false),
                contact_name = table.Column<string>(type: "character varying(160)", maxLength: 160, nullable: false),
                email = table.Column<string>(type: "character varying(254)", maxLength: 254, nullable: false),
                phone = table.Column<string>(type: "character varying(40)", maxLength: 40, nullable: false),
                preferred_contact_method = table.Column<string>(type: "character varying(120)", maxLength: 120, nullable: false),
                requirements_json = table.Column<string>(type: "jsonb", nullable: false),
                submitted_at_utc = table.Column<DateTimeOffset>(type: "timestamp with time zone", nullable: false)
            },
            constraints: table => table.PrimaryKey("pk_managed_service_enquiries", value => value.id));

        migrationBuilder.CreateIndex(
            name: "ix_managed_service_enquiries_submitted_at_utc",
            table: "managed_service_enquiries",
            column: "submitted_at_utc");

        migrationBuilder.CreateIndex(
            name: "ix_managed_service_enquiries_type_submitted_at_utc",
            table: "managed_service_enquiries",
            columns: ["type", "submitted_at_utc"]);
    }

    protected override void Down(MigrationBuilder migrationBuilder)
    {
        migrationBuilder.DropTable(name: "managed_service_enquiries");
    }
}
