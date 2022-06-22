import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Comment } from "@mui/icons-material";

import ToggleButton from "../components/toggleButton/ToggleButton";

export default {
  component: ToggleButton,
  title: "ToggleButton",
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <Comment />,
  label: "Show all comments",
};
