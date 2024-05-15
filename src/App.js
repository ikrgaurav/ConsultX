import React from "react";
import Header from "./components/header/Header";
import RouterRoutes from "./routerRoutes/RouterRoutes";
import Footer from "./components/footer/Footer";
import BackTop from "./components/backTop/BackTop";
import ScrollRestoration from "./utils/scrollRestore/ScrollRestoration";

function App() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <RouterRoutes />
      <Footer />
      <BackTop />
    </>
  );
}

export default App;
