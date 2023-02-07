import React from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import Box from "@cloudscape-design/components/box";
import Toggle from "@cloudscape-design/components/toggle";
import SpaceBetween from "@cloudscape-design/components/space-between";
import ProgressBar from "@cloudscape-design/components/progress-bar";
import Grid from "@cloudscape-design/components/grid";
import { PreviewProcessedText } from "../components/audioWorkflow/PreviewProcessedText";
import { AudioForm } from "../components/audioWorkflow/AudioForm";

export const Home = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <React.Fragment>
      <SpaceBetween size="s">
        <Grid gridDefinition={[{ colspan: 4 }, { colspan: 8 }]}>
          <Container
            header={
              <Header variant="h2" description="a normal bulb">
                Bulb
              </Header>
            }
          >
            <Box>This is just a normal bulb. Try turning on the bulb</Box>
          </Container>

          <Container
            header={
              <Header variant="h2" description="Switch Controller">
                Controller
              </Header>
            }
          >
            <Grid gridDefinition={[{ colspan: 4 }, { colspan: 6 }]}>
              <Toggle
                onChange={({ detail }) => setChecked(detail.checked)}
                checked={checked}
              >
                Toggle to turn on light
              </Toggle>
              {checked && (
                <ProgressBar
                  value={36}
                  description="trying to turn on the light"
                  label="Turning On light"
                />
              )}
            </Grid>
          </Container>
        </Grid>
        <Container
          header={
            <Header
              variant="h2"
              description="Start v2t by choosing the options"
            >
              V2T
            </Header>
          }
        >
          <Grid gridDefinition={[{ colspan: 4 }, { colspan: 8 }]}>
            <AudioForm />
            <PreviewProcessedText />
          </Grid>
        </Container>
      </SpaceBetween>
    </React.Fragment>
  );
};
