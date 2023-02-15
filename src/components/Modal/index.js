import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, Title, Content, Controls } from './styles';

const Modal = ({ title, open, content, controls, handleClose }) => {
  return (
    <ModalContainer open={open} disableEscapeKeyDown onClose={handleClose}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Controls>{controls}</Controls>
    </ModalContainer>
  );
};

Modal.defaultProps = {
  title: '',
  open: false,
  content: <></>,
  controls: <></>,
  handleClose: () => {},
};

Modal.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  content: PropTypes.node,
  controls: PropTypes.node,
  handleClose: PropTypes.func,
};

export default Modal;
