import React, { useEffect, useState } from "react";
import Form from "@cloudscape-design/components/form";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Button from "@cloudscape-design/components/button";
import { OptionDefinition } from "@cloudscape-design/components/internal/components/option/interfaces";
import { LanguageSelection } from "./LanguageSelection";
import { ProcessMode } from "./ProcessMode";
import { allModes, languagesSupported } from "./AudioWorkflowConstants";

export const AudioForm = () => {
  /**
   * This is used to store form validation status.
   */
  const [isValid, setIsValid] = useState<boolean>(false);
  /**
   * This is used to store the language selected.
   */
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<OptionDefinition | null>(null);
  /**
   * This is used to store the mode selected.
   */
  const [mode, setMode] = React.useState("");
  /**
   * Use effect hook to perform validations.
   */
  useEffect(() => {
    let valid = selectedLanguage !== null && mode !== "";
    setIsValid(valid);
  }, [selectedLanguage, mode]);

  return (
    <Form
      actions={
        <SpaceBetween direction="horizontal" size="xs">
          <Button formAction="none" variant="link">
            Cancel
          </Button>
          <Button variant="primary" disabled={!isValid}>
            Start
          </Button>
        </SpaceBetween>
      }
    >
      <LanguageSelection
        selectedOption={selectedLanguage}
        setSelectedOption={setSelectedLanguage}
        options={languagesSupported}
      />
      <ProcessMode mode={mode} allModes={allModes} setMode={setMode} />
      <Button iconName="upload" variant="icon">
        Select File
      </Button>
      Submit audio to convert it to text
    </Form>
  );
};
