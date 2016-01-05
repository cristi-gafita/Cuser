using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CuSer.DataAccess.Models
{
    class Recommendation
    {
        public List<Joke> Jokes { get; set; }

        public List<Game> Games { get; set; }

        public List<Product> Food { get; set; } 
    }
}
