/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTheme } from '@mui/material/styles';
import { collapseDrawer } from '../../store/actions/config.action';
import { Container, Bar, IconButtonContainer, Logo } from './styles';
import { useAuth } from "../../services";



function NavbarLayout({ logo }) {
  const { currentUser } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isPostView = useSelector(state => state.config.onPagePost);
  const username = null; // Aquí deberías reemplazar por la lógica para obtener el username si es necesario




console.log()

  const handleClickMenu = () => {
    dispatch(collapseDrawer(false));
  };

  const renderLeftIcon = () => {
    if (!username) {
      if (isPostView) {
        return (
          <IconButtonContainer
            onClick={() => {
              router.back();
            }}
          >
            <ArrowBackIcon />
          </IconButtonContainer>
        );
      }
      return (
        <IconButtonContainer onClick={handleClickMenu}>
          <MenuIcon />
        </IconButtonContainer>
      );
    }
    return <IconButtonContainer />;
  };

  return (
    <Container position="static" theme={theme}>
      <Bar theme={theme}>
        {renderLeftIcon()}
        <Logo src={logo.src} alt="logo" />
      </Bar>
    </Container>
  );
}

export default NavbarLayout;