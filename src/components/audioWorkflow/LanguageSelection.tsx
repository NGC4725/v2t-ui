import Header from "@cloudscape-design/components/header";
import Select from "@cloudscape-design/components/select";
import React, { Dispatch, SetStateAction } from "react";
import { OptionDefinition } from "@cloudscape-design/components/internal/components/option/interfaces";

type TLanguageSelectionProps = {
  selectedOption: OptionDefinition | null;
  setSelectedOption: Dispatch<SetStateAction<OptionDefinition | null>>;
  options: OptionDefinition[];
};

export const LanguageSelection = (props: TLanguageSelectionProps) => {
  const { selectedOption, setSelectedOption, options } = props;
  return (
    <React.Fragment>
      <Header variant="h3" description={"Choose Language for output format"}>
        Language
      </Header>
      <Select
        selectedOption={selectedOption}
        onChange={({ detail }) => setSelectedOption(detail.selectedOption)}
        options={options}
        selectedAriaLabel="Selected"
        placeholder="Select the language"
      />
    </React.Fragment>
  );
};
