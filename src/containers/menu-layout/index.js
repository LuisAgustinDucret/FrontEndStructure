import React from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { collapseDrawer, changeTheme } from "../../store/actions/config.action";
import { Container } from "./styles";
import MenuDrawer from "../../components/MenuDrawer";
import { logout } from "../../services";
import { useAuth } from "../../services";


const MenuLayout = () => {
    const theme = useTheme();
    const router = useRouter();
    const dispatch = useDispatch();
    const { currentUser } = useAuth();
  
    const isShowing = useSelector((state) => !state.config.drawerCollapse);
    const darkMode = useSelector((state) => state.config.darkMode);
  
    const handleLogout = async () => {
      try {
        await logout();
      } catch (error) {
        console.log('Error al cerrar sesión:', error);
      }
    };


    const goToCategorias = () => {
      dispatch(collapseDrawer(true));
      router.push("/Categorias");
    };
    const goToSocios = () => {
      dispatch(collapseDrawer(true));
      router.push("/Socios");
    };
    const goToGrupoFamiliar = () => {
      dispatch(collapseDrawer(true));
      router.push("/GrupoFamiliar");
    };

    return (
      <Container theme={theme}>
        <MenuDrawer
        username={currentUser.email}
          isShowing={isShowing}
          onClose={() => {
            dispatch(collapseDrawer(true));
          }}
          darkMode={darkMode}
          changeThemeMode={() => {
            dispatch(changeTheme());
          }}
            onLogout={handleLogout}
          redirectCategorias={goToCategorias}
          redirectSocios={goToSocios}
          redirectGrupoFamiliar={goToGrupoFamiliar}

        />
      </Container>
    );
  };
  
  export default MenuLayout;


