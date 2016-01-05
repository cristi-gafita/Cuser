using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
