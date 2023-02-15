import styled from 'styled-components';

import { AppBar, Toolbar, IconButton } from '@mui/material';

/* ${ ({theme}) => {console.log(theme.palette)}} */

export const Container = styled(AppBar)`
  display: flex;
  width: 100%;
`;

export const Bar = styled(Toolbar)`
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  justify-content: space-between;
`;

export const IconButtonContainer = styled(IconButton)``;

export const Logo = styled.img`
  height: 3.5vmin;
  margin: 0.5vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }


`;

// Efecto rotacion logo va en linea 28
/*@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}*/