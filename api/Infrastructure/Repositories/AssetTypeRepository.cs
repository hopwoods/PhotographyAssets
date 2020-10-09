using Marten;
using Microsoft.Extensions.Configuration;
using PhotographyAssetsAPI.Application.Interfaces;
using PhotographyAssetsAPI.Core.Entities;
using System.Linq;

namespace PhotographyAssetsAPI.Infrastructure.Repositories
{
    public class AssetTypeRepository : IAssetTypeRepository
    {
        private readonly IConfiguration _configuration;
        private readonly IDocumentStore _documentStore;

        public AssetTypeRepository(IConfiguration configuration, IDocumentStore documentStore)
        {
            _configuration = configuration;
            _documentStore = documentStore;
        }

        public async void Add(AssetType item)
        {
            using var session = _documentStore.OpenSession();
            session.Store(item);
            await session.SaveChangesAsync();
        }

        //public async Task<int> Delete(int id)
        //{
        //    const string sql = "DELETE FROM Assets WHERE Id = @Id;";
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    connection.Open();
        //    var affectedRows = await connection.ExecuteAsync(sql, new { Id = id });
        //    return affectedRows;
        //}

        public AssetType Get(int id)
        {
            using var session = _documentStore.OpenSession();
            var results = session.Query<AssetType>().Where(item => item.Id == id);
            session.Dispose();
            return results.FirstOrDefault();
        }

        public IQueryable<AssetType> GetAll()
        {
            using var session = _documentStore.OpenSession();
            var results = session.Query<AssetType>();
            session.Dispose();
            return results;
        }

        //public async Task<int> Update(Asset entity)
        //{
        //    entity.DateModified = DateTime.Now;
        //    const string sql = @"UPDATE [dbo].[Assets] 
        //                SET TypeId = @TypeId, 
        //                SerialNumber = @SerialNumber, 
        //                Value = @Value, 
        //                Price = @Price, 
        //                Owned = @Owned, 
        //                DateModified = @DateModified 
        //                WHERE Id = @Id;";
        //    using var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection"));
        //    connection.Open();
        //    var affectedRows = await connection.ExecuteAsync(sql, entity);
        //    return affectedRows;
        //}
    }
}