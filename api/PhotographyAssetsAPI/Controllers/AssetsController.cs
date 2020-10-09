using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using PhotographyAssetsAPI.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;
using Marten;
using PhotographyAssetsAPI.Application.Interfaces;

namespace PhotographyAssetsAPI.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AssetsController : ControllerBase
    {
        private readonly ILogger<AssetsController> _logger;
        private readonly IAssetRepository _assetRepository;

        public AssetsController(ILogger<AssetsController> logger, IAssetRepository assetRepository)
        {
            _logger = logger;
            _assetRepository = assetRepository;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Asset> GetAll()
        {
            var results = _assetRepository.GetAll();
            _logger.LogDebug(new EventId(), "Assets Retrieved");
            return results;
        }

        [HttpPost]
        public void Post([FromBody]Asset item)
        {
            _assetRepository.Add(item);
            _logger.LogDebug(new EventId(), $"Asset: {item} Added");
        }
    }
}
