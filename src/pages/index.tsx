import { useAuth } from "@/services";
import Home from "./home"
import Login from "./login"

const IndexPage = () => {
    const { currentUser } = useAuth();
    return (
        <>
          { currentUser != null ? <Home /> : <Login /> }
        </>
      );
    }

export default IndexPage;
