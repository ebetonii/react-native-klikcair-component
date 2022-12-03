// src/components/atoms/CustomButton.stories.tsx

import { storiesOf } from "@storybook/react-native";
import { CenterView } from "../../../storybook/stories/CenterView";
import React from "react";
import Button from "../../../src/components/Button";
import { boolean, select, text } from "@storybook/addon-knobs";

storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Standard Long Primary", () => (
    <Button
      title={text("Title", "Example Title")}
      category={"Standard"}
      type={"Primary"}
      isLoading={boolean('loading',false)}
    />
  ));
