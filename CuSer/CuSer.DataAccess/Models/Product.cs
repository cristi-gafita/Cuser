using System.Collections.Generic;

namespace CuSer.DataAccess.Models
{
    class Product
    {
        public string Name { get; set; }

        public List<Ingredient> Ingredients { get; set; }

        public int Price { get; set; }

        public List<Feedback> Feedbacks { get; set; }
    }
}
