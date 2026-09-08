using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Infrastructure.Enquiries;
using XpSys.PublicWebsite.Infrastructure.Persistence;

namespace XpSys.PublicWebsite.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        IConfiguration configuration)
    {
        var connectionString = configuration.GetConnectionString("PublicWebsite");
        if (string.IsNullOrWhiteSpace(connectionString))
        {
            services.AddScoped<IManagedServiceEnquiryRepository, UnavailableManagedServiceEnquiryRepository>();
            return services;
        }

        services.AddDbContext<PublicWebsiteDbContext>(
            options => options.UseNpgsql(connectionString));
        services.AddScoped<IManagedServiceEnquiryRepository, ManagedServiceEnquiryRepository>();
        return services;
    }
}
