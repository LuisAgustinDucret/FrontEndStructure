import { useRouter } from "next/router";
import React from "react";
import LoginContainer from "../containers/login-layout";

function Home() {
  const router = useRouter();
  const goToLogin = () => {
    router.replace("login");
  };
  return (
    <>

     <LoginContainer navigateToHome={goToLogin} />
    </>
  );
}

export default Home;