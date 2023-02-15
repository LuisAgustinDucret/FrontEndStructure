import React from 'react';
import { useTheme } from "@mui/material/styles";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Typography from "@mui/material/Typography";
import { Wrapper, ErrorWrapper } from './styles';

const ErrorMessage = ({ error }) => {
  const theme = useTheme();
  return (
    <Wrapper>
      {error ? (
        <ErrorWrapper color={theme.palette.error.main}>
          <ErrorOutlineIcon />
          <Typography variant="body2">{error}</Typography>
        </ErrorWrapper>
      ) : null}
    </Wrapper>
  );
};

export default ErrorMessage;
