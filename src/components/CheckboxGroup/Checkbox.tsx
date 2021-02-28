import { PropsWithChildren, useContext, useRef, useEffect } from "react";

import useHover from "../../hooks/ui/useHover";
import { CheckboxGroupContext } from "./CheckboxGroup";
import {
  checkboxChecked,
  checkboxDisabled,
  checkboxHovered,
  checkboxOutlined,
} from "../../assets";

import {
  CheckboxButton,
  Label,
  HiddenInput,
  LabelText,
} from "./CheckboxGroup.styles";

interface CheckboxProps {
  value?: string;
  state?: "on" | "off";
  defaultChecked?: boolean;
  indeterminate?: boolean;
  name?: string;
  position?: "left" | "right";
  onChangeStatus?: (_checked: "on" | "off") => void;
  disabled?: boolean;
}

/**
 * Group을 사용할 경우: value를 제공
 * Individual하게 사용할 경우: state, onChangeStatus를 제공
 */
const Checkbox = ({
  value,
  state,
  name,
  defaultChecked,
  children,
  onChangeStatus,
  indeterminate,
  position = "right",
  disabled = false,
}: PropsWithChildren<CheckboxProps>) => {
  if (value && (state || onChangeStatus))
    throw new Error("value는 state, onChangeStatus와 같이 사용될 수 없습니다");

  const checkboxRef = useRef<HTMLInputElement>(null);
  const { selectedValues, setSelectedValues } = useContext(
    CheckboxGroupContext
  );
  const { hoverRef, isHovered } = useHover();

  useEffect(() => {
    /**
     * @todo Add indeterminate 시나리오
     */
    if (checkboxRef.current && indeterminate) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const onChangeValue = () => {
    if (disabled) return;
    if (onChangeStatus) {
      const isSelected = state === "on";
      onChangeStatus(isSelected ? "off" : "on");
    } else {
      value && setSelectedValues(value);
    }
  };

  const isChecked = () => {
    if (value) {
      if (selectedValues.find((_selected) => _selected === value)) {
        return "on";
      }
      return "off";
    }
    return state;
  };

  const getIconImg = () => {
    if (disabled) return checkboxDisabled;
    if (isChecked() === "on") return checkboxChecked;
    if (isHovered) return checkboxHovered;
    return checkboxOutlined;
  };

  return (
    <Label ref={hoverRef}>
      {children && position === "left" && (
        <LabelText pos="left" disabled={disabled}>
          {children}
        </LabelText>
      )}
      <HiddenInput
        ref={checkboxRef}
        type="checkbox"
        name={name || value}
        value={isChecked()}
        checked={defaultChecked}
        onChange={onChangeValue}
      />
      <CheckboxButton src={getIconImg()} alt="radio-image" />

      {children && position === "right" && (
        <LabelText pos="right" disabled={disabled}>
          {children}
        </LabelText>
      )}
    </Label>
  );
};

export default Checkbox;
