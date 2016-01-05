using System.Collections.Generic;

namespace CuSer.DataAccess.Models
{
    class Recommendation
    {
        public List<Joke> Jokes { get; set; }

        public List<Game> Games { get; set; }

        public List<Product> Food { get; set; } 
    }
}
