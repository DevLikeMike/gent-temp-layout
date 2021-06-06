import Head from "next/head";
import Footer from "./Footer";
import Header from "./navigation/Header";
import PageContainer from "@/components/PageContainer";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Gent Template</title>
      </Head>
      <Header />
      <PageContainer>{children}</PageContainer>
      <Footer />
    </>
  );
}

export default Layout;
