import React, { createContext, PropsWithChildren } from 'react';

import { Container } from './RadioGroup.styles';

interface RadioGroupProps {
  selectedValue: string;
  setSelectedValue: (_value: string) => void;
}

export const RadioGroupContext = createContext({
  selectedValue: '',
  setSelectedValue: (_value: string) => {},
});

const { Provider } = RadioGroupContext;

const RadioGroup = ({
  children,
  selectedValue,
  setSelectedValue,
}: PropsWithChildren<RadioGroupProps>) => {
  return (
    <Container>
      <Provider
        value={{
          selectedValue,
          setSelectedValue,
        }}
      >
        {children}
      </Provider>
    </Container>
  );
};

export default RadioGroup;
