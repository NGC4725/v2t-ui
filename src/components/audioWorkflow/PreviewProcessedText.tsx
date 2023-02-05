import React from "react";
import TextContent from "@cloudscape-design/components/text-content";
import Box from "@cloudscape-design/components/box";
import Header from "@cloudscape-design/components/header";

export const PreviewProcessedText = () => {
  const sampleText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <React.Fragment>
      <Header>Text Preview</Header>

      <Box>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
        <TextContent>{sampleText}</TextContent>
      </Box>
    </React.Fragment>
  );
};
