import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient } from "@apollo/client/core";
import { InMemoryCache } from "@apollo/client/cache";
import { ApolloProvider } from "@apollo/client/react";

const graphql_uri = process.env.graphql || "http://localhost:5000/graphql";

const client = new ApolloClient({
  uri: graphql_uri,
  cache: new InMemoryCache(),
});

console.log(graphql_uri);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
