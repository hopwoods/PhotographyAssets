using Microsoft.Extensions.DependencyInjection;
using PhotographyAssetsAPI.Application.Interfaces;
using PhotographyAssetsAPI.Infrastructure.Repositories;

namespace PhotographyAssetsAPI.Infrastructure.DependencyInjection
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<IAssetRepository, AssetRepository>();
            return services;
        }
    }
}