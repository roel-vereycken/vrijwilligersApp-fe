import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import "../styles/globals.css";
import "../styles/table.scss";
import "../styles/dropdown.scss";

// axios.defaults.baseURL = "https://wdev2.be/roel21/eindwerk/api";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
