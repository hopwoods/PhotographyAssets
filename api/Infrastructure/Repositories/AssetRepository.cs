using Marten;
using Microsoft.Extensions.Configuration;
using PhotographyAssetsAPI.Application.Interfaces;
using PhotographyAssetsAPI.Core.Entities;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marten.Linq;

namespace PhotographyAssetsAPI.Infrastructure.Repositories
{
    public class AssetRepository : IAssetRepository
    {
        private readonly IConfiguration _configuration;
        private readonly IDocumentStore _documentStore;

        public AssetRepository(IConfiguration configuration, IDocumentStore documentStore)
        {
            _configuration = configuration;
            _documentStore = documentStore;
        }

        public async void Add(Asset item)
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

        public Asset Get(int id)
        {
            using var session = _documentStore.OpenSession();
            var results = session.Query<Asset>().Where(item => item.Id == id);
            session.Dispose();
            return results.FirstOrDefault();
        }

        public IQueryable<Asset> GetAll()
        {
            using var session = _documentStore.OpenSession();
            var results = session.Query<Asset>();
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