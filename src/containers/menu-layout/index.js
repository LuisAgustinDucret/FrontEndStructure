import React from "react";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { collapseDrawer, changeTheme } from "../../store/actions/config.action";
import { Container } from "./styles";
import MenuDrawer from "../../components/MenuDrawer";

const MenuLayout = () => {
    const theme = useTheme();
    const router = useRouter();
    const dispatch = useDispatch();
  
    const isShowing = useSelector((state) => !state.config.drawerCollapse);
    const darkMode = useSelector((state) => state.config.darkMode);
  


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
          isShowing={isShowing}
          onClose={() => {
            dispatch(collapseDrawer(true));
          }}
          darkMode={darkMode}
          changeThemeMode={() => {
            dispatch(changeTheme());
          }}
          onLogout={() => {}}
          redirectCategorias={goToCategorias}
          redirectSocios={goToSocios}
          redirectGrupoFamiliar={goToGrupoFamiliar}
        />
      </Container>
    );
  };
  
  export default MenuLayout;


