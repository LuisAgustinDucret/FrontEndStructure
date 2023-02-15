
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import InputAdornmentUI from "@mui/material/InputAdornment";
import IconButtonUI from "@mui/material/IconButton";

export const Input = styled(TextField)`
  width: ${({ width }) => width || "100%"};
  margin: ${({ gap, theme }) => theme.spacing(gap) || 0};
`;

export const InputAdornment = styled(InputAdornmentUI)``;

export const IconButtonContainer = styled(IconButtonUI)``;
