
import styled from 'styled-components';
import {
  Dialog as DialogUI,
  DialogTitle as DialogTitleUI,
  DialogContent as DialogContentUI,
  DialogActions as DialogActionsUI,
} from '@mui/material';

export const ModalContainer = styled(DialogUI)``;
export const Title = styled(DialogTitleUI)``;
export const Controls = styled(DialogActionsUI)``;
export const Content = styled(DialogContentUI)`
  &&.MuiDialogContent-root {
    display: flex;
    flex-wrap: wrap;
    padding: 1%;
  }
  
  @media (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;
