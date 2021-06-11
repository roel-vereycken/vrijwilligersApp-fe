import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import "../styles/table.scss";
import "../styles/dropdown.scss";

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
