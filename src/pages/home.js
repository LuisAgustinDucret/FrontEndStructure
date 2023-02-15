import { useRouter } from "next/router";
import React from "react";
import TestContainer from "../containers/test-layout";
import MenuContainer from "../containers/menu-layout";
import NavbarLayout from "../containers/navbar-layout";
import logo from "../../public/logo.svg"


function Home() {
  const router = useRouter();
  const goToHome = () => {
    router.replace("home");
  };
  return (
    <>
      <NavbarLayout logo={logo} />
      <MenuContainer/>
     <TestContainer navigateToHome={goToHome} />
    </>
  );
}

export default Home;