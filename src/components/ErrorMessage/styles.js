import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;

  .MuiTypography-root {
    padding: 0 4px;
    text-align: center;
    color: ${({ color }) => color};
  }

  svg {
    color: ${({ color }) => color};
  }
`;
