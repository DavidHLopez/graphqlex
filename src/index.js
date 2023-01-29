const { ApolloServer, gql } = require("apollo-server");


const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
  type Quotes {
    quote: String
    author: String
  }
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    quotes: [Quotes]
  }
`;

const quotes = [
    {
      quote: 'Finding myself awake at …sis, I sleep just fine.',
      author: 'Walter White',
    },
    { quote: "Send him to Belize? I'll send YOU to Belize.",
      author: 'Walter White'
    },
    { quote: "He handles the businesses, and I handle him.",
      author: 'Walter White'
    },
    { quote: "I did it for me. I liked it. I was good at it. And... I was really... I was alive.",
      author: 'Walter White'
    },
    { quote: "Fire in the hole, bitch!",
      author: 'Jesse Pinkman'
    },
    { quote: "Fire in the hole, bitch!",
      author: 'Jesse Pinkman'
    },
    { quote: "If you believe that there’s a hell, we’re pretty much already going there.",
      author: 'Walter White'
    },
    
    { quote: "Bitch!",
      author: 'Jesse Pinkman'
    },
    { quote: "Find what you love and let it kill you.",
      author: 'Walter White'
    },   
    { quote: "A guy opens his door and gets shot and you think that of me? No. I am the one who knocks!",
      author: 'Walter White'},

    { quote: "Never give up control. Live life on your own terms.",
      author: 'Walter White'}, 
   
  ];
  const resolvers = {
    Query: {
      quotes: () => quotes,
    },
  };


const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});