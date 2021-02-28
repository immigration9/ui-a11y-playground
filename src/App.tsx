import React, { useState } from "react";
import { Radio, Checkbox } from "remember-ui";

import RadioGroup from "./components/RadioGroup/RadioGroup";
import ControlledRadio from "./components/RadioGroup/Radio";
import CheckboxGroup from "./components/CheckboxGroup/CheckboxGroup";
import ControlledCheckbox from "./components/CheckboxGroup/Checkbox";

import { PropertyGroup, LabelledProperty, Label } from "./App.styles";

function App() {
  const [groupSelectedValue, setGroupSelectedValue] = useState("all");
  const [selectedValue, setSelectedValue] = useState("all");

  const [groupCheckboxValues, setGroupCheckboxValues] = useState<string[]>([]);
  const [checkboxValue, setCheckboxValue] = useState<"on" | "off">("off");
  const [legacyCheckboxValue, setLegacyCheckboxValue] = useState<"on" | "off">(
    "off"
  );

  return (
    <div style={{ padding: "20px 40px" }}>
      <h2>Radio Group</h2>
      <RadioGroup
        selectedValue={groupSelectedValue}
        setSelectedValue={setGroupSelectedValue}
      >
        <PropertyGroup>
          <LabelledProperty>
            <ControlledRadio value="all">Android, iOS</ControlledRadio>
          </LabelledProperty>
          <LabelledProperty>
            <ControlledRadio value="android">Android</ControlledRadio>
          </LabelledProperty>
          <LabelledProperty>
            <ControlledRadio value="ios">iOS</ControlledRadio>
          </LabelledProperty>
        </PropertyGroup>
      </RadioGroup>
      <h2>Legacy Radio</h2>
      <PropertyGroup>
        <LabelledProperty>
          <Radio
            isChecked={selectedValue === "all"}
            onClick={() => setSelectedValue("all")}
          />
          <Label>Android, iOS</Label>
        </LabelledProperty>
        <LabelledProperty>
          <Radio
            isChecked={selectedValue === "android"}
            onClick={() => setSelectedValue("android")}
          />
          <Label>Android</Label>
        </LabelledProperty>
        <LabelledProperty>
          <Radio
            isChecked={selectedValue === "ios"}
            onClick={() => setSelectedValue("ios")}
          />
          <Label>iOS</Label>
        </LabelledProperty>
      </PropertyGroup>
      <h2>Checkbox Group</h2>
      <CheckboxGroup
        values={groupCheckboxValues}
        onChange={setGroupCheckboxValues}
      >
        <PropertyGroup>
          <LabelledProperty>
            <ControlledCheckbox value="all">Android, iOS</ControlledCheckbox>
          </LabelledProperty>
          <LabelledProperty>
            <ControlledCheckbox value="android">Android</ControlledCheckbox>
          </LabelledProperty>
          <LabelledProperty>
            <ControlledCheckbox value="ios">iOS</ControlledCheckbox>
          </LabelledProperty>
        </PropertyGroup>
      </CheckboxGroup>
      <h2>Checkbox Individual</h2>
      <LabelledProperty>
        <ControlledCheckbox
          state={checkboxValue}
          onChangeStatus={setCheckboxValue}
        >
          개별 선택
        </ControlledCheckbox>
      </LabelledProperty>
      <h2>Legacy Checkbox</h2>
      <LabelledProperty>
        <Checkbox
          state={legacyCheckboxValue}
          onClick={() =>
            setLegacyCheckboxValue(legacyCheckboxValue === "on" ? "off" : "on")
          }
        />
        <Label>개별 선택</Label>
      </LabelledProperty>
    </div>
  );
}

export default App;
