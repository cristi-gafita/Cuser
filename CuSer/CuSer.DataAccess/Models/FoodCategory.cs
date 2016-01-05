using System.Collections.Generic;

namespace CuSer.DataAccess.Models
{
    class FoodCategory
    {
        public string Name { get; set; }

        public List<Product> Products { get; set; }
    }
}
