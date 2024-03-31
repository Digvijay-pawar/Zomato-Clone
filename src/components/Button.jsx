import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.308);
  color: ${props => props.hovered ? '#0F1729' : 'inherit'};
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(237, 233, 233, 0.308);
    color: ;
  }
`;

const FilterButton = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default FilterButton;
