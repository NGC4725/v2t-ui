import { OptionDefinition } from "@cloudscape-design/components/internal/components/option/interfaces";

export const allModes = [
  {
    value: "file",
    label: "File",
    description: "Select this mode if you have a file",
  },
  {
    value: "record",
    label: "Record",
    description: "Select this mode if you want to record",
  },
  {
    value: "real-time",
    label: "Live",
    description: "Select this mode for real time",
  },
];

export const languagesSupported: OptionDefinition[] = [
  { label: "English", value: "1" },
  { label: "Telugu", value: "2" },
  { label: "Japanese", value: "3" },
  { label: "Chinese", value: "4" },
];
