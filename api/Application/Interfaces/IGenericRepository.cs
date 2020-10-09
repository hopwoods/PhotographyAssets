using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marten.Linq;
using PhotographyAssetsAPI.Core.Entities;

namespace PhotographyAssetsAPI.Application.Interfaces
{
    public interface IGenericRepository<T> where T : class
    {
        T Get(int id);
        IQueryable<T> GetAll();
        void Add(T entity);
        //Task<int> Delete(int id);
        //Task<int> Update(T entity);
    }
}