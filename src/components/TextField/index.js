import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import { Input } from "./styles";

const InputText = ({
  name,
  type,
  label,
  value,
  variant,
  width,
  margin,
  error,
  helperText,
  onFocus,
  onClick,
  onChange,
}) => {
  const theme = useTheme();
  return (
    <Input
      name={name}
      type={type}
      label={label}
      value={value}
      theme={theme}
      variant={variant}
      width={width}
      margin="normal"
      gap={margin}
      error={error}
      helperText={error ? error : ""}
      onChange={onChange}
      onClick={onClick}
      onFocus={onFocus}
    />
  );
};

InputText.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "filled", "outlined"]),
  label: PropTypes.string,
  width: PropTypes.string,
  error: PropTypes.bool,
  margin: PropTypes.number,
  helperText: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  gap: PropTypes.number,
};

InputText.defaultProps = {
  type: "text",
  variant: "outlined",
  label: "Default label",
  margin: 10,
  width: null,
  error: false,
  helperText: "",
  gap: 10,
  onClick: () => {},
  onChange: () => {},
  onFocus: () => {},
};

export default InputText;