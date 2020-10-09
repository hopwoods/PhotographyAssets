using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PhotographyAssetsAPI.Application.Interfaces;
using PhotographyAssetsAPI.Core.Entities;
using System.Collections.Generic;

namespace PhotographyAssetsAPI.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AssetTypesController : ControllerBase
    {
        private readonly ILogger<AssetsController> _logger;
        private readonly IAssetTypeRepository _repository;

        public AssetTypesController(ILogger<AssetsController> logger, IAssetTypeRepository repository)
        {
            _logger = logger;
            _repository = repository;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<AssetType> GetAll()
        {
            var results = _repository.GetAll();
            _logger.LogDebug(new EventId(), "Asset Types Retrieved");
            return results;
        }

        [HttpPost]
        public void Post([FromBody]AssetType item)
        {
            _repository.Add(item);
            _logger.LogDebug(new EventId(), $"Asset Type: {item} Added");
        }
    }
}
