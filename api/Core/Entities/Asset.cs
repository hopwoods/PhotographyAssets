using System;

namespace PhotographyAssetsAPI.Core.Entities
{
    public class Asset
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public AssetType Type { get; set; }
        public string SerialNumber { get; set; }
        public decimal Value { get; set; }
        public decimal Price { get; set; }
        public bool Owned { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}
