import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloClient} from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloClient client={client}>
      <Component {...pageProps} />
    </ApolloClient>
  )
}