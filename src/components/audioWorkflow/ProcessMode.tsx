import Header from "@cloudscape-design/components/header";
import Tiles from "@cloudscape-design/components/tiles";
import React, { Dispatch, SetStateAction } from "react";
type TProcessModeProps = {
  mode: string;
  allModes: { value: string; label: string; description: string }[];
  setMode: Dispatch<SetStateAction<string>>;
};

export const ProcessMode = (props: TProcessModeProps) => {
  const { mode, allModes, setMode } = props;
  return (
    <React.Fragment>
      <Header variant="h3" description={"Select the processing mode"}>
        Mode
      </Header>
      <Tiles
        columns={1}
        onChange={({ detail }) => setMode(detail.value)}
        value={mode}
        items={allModes}
      />
    </React.Fragment>
  );
};
