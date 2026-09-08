using XpSys.PublicWebsite.Application.Enquiries;
using XpSys.PublicWebsite.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddProblemDetails();
builder.Services.AddSingleton(TimeProvider.System);
builder.Services.AddScoped<SubmitManagedWebPlatformEnquiryHandler>();
builder.Services.AddScoped<SubmitManagedApplicationEnquiryHandler>();
builder.Services.AddScoped<SubmitManagedWebsiteEnquiryHandler>();
builder.Services.AddScoped<SubmitCallbackEnquiryHandler>();
builder.Services.AddInfrastructure(builder.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

public partial class Program;
