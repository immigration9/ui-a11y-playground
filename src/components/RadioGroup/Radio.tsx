import React, { useState, useContext, PropsWithChildren } from "react";

import useHover from "../../hooks/ui/useHover";
import { RadioGroupContext } from "./RadioGroup";
import { radioChecked, radioUnchecked, radioHovered } from "../../assets";

import {
  RadioButton,
  Label,
  HiddenInput,
  LabelText,
} from "./RadioGroup.styles";

interface RadioProps {
  value: string;
  name?: string;
  position?: "left" | "right";
  onChange?: (_value: string) => void;
  disabled?: boolean;
}

const Radio = ({
  value,
  name,
  children,
  onChange,
  position = "right",
  disabled = false,
}: PropsWithChildren<RadioProps>) => {
  const [localSelected, setLocalSelected] = useState(false);
  const { selectedValue, setSelectedValue } = useContext(RadioGroupContext);
  const { hoverRef, isHovered } = useHover();

  const getIconImg = () => {
    if (value === selectedValue) return radioChecked;
    if (isHovered && !disabled) return radioHovered;
    return radioUnchecked;
  };

  const onChangeValue = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    if (onChange) {
      onChange(target.value);
      setLocalSelected(true);
    } else {
      setSelectedValue(target.value);
    }
  };

  const isChecked = () =>
    selectedValue ? value === selectedValue : localSelected;

  return (
    <Label ref={hoverRef}>
      {children && position === "left" && (
        <LabelText pos="left" disabled={disabled}>
          {children}
        </LabelText>
      )}
      <HiddenInput
        type="radio"
        name={name || value}
        value={value}
        checked={isChecked()}
        onChange={onChangeValue}
      />
      <RadioButton
        src={getIconImg()}
        alt={`${value}-radio-button-checked-${isChecked()}`}
      />
      {children && position === "right" && (
        <LabelText pos="right" disabled={disabled}>
          {children}
        </LabelText>
      )}
    </Label>
  );
};

export default Radio;
