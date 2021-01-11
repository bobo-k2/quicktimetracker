import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Label = styled.div`
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin-bottom: 6px;
`;

const Value = styled.div`
    text-align: ${(props) => props.textAlign};
`;

const ValueDisplay = ({ labelText, value, valueAlignment }) => (
  <Wrapper>
    <Label>{labelText}</Label>
    <Value textAlign={valueAlignment}>{value}</Value>
  </Wrapper>
);

ValueDisplay.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  valueAlignment: PropTypes.string,
};

ValueDisplay.defaultProps = {
  valueAlignment: 'left',
};

export default ValueDisplay;
