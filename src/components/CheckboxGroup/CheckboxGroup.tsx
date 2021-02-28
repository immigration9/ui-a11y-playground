import { createContext, PropsWithChildren } from 'react';

import { Container } from './CheckboxGroup.styles';

interface CheckboxGroupContextProps {
  selectedValues: string[];
  setSelectedValues: (_value: string) => void;
}

interface CheckboxGroupProps {
  values: string[];
  onChange: (_value: string[]) => void;
}

export const CheckboxGroupContext = createContext<CheckboxGroupContextProps>({
  selectedValues: [],
  setSelectedValues: (_value: string) => {},
});

const { Provider } = CheckboxGroupContext;

const CheckboxGroup = ({
  children,
  values,
  onChange,
}: PropsWithChildren<CheckboxGroupProps>) => {
  return (
    <Container>
      <Provider
        value={{
          selectedValues: values,
          setSelectedValues: (_value) => {
            if (!values.find((_selected) => _selected === _value)) {
              onChange(values.concat(_value));
            } else {
              onChange(values.filter((_selected) => _selected !== _value));
            }
          },
        }}
      >
        {children}
      </Provider>
    </Container>
  );
};

export default CheckboxGroup;
