// ./apollo-client.js
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl11yme0c5dlz01z1543vemws/master",
  cache: new InMemoryCache(),
  ssrMode: true,
});


export default client;
