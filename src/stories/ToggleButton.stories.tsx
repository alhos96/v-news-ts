import { ComponentMeta, ComponentStory } from "@storybook/react";

import ToggleButton from "../components/ToggleButton";

export default {
  component: ToggleButton,
  title: "ToggleButton",
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => (
  <ToggleButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
