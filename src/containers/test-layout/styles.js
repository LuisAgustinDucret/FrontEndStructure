import styled from 'styled-components';

import Paper from '@mui/material/Paper';

import { dimensions } from '../../constants';

export const Title = styled.div`
  align-items: center;
`;

export const CardTop = styled.div`
    align-items: center;
`;

export const CardMiddle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CardContainer = styled(Paper)`
  height: 100%;
  width: 90%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 7px;
  justify-content: space-between;
  .MuiFormControl-root {
    margin-top: 3px;
  }
  ${CardBottom} {
    margin-top: 5px;
    .MuiButtonBase-root:nth-child(2) {
      margin-top: 9px;
    }
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:5px;
`;