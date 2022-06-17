import { ComponentMeta, ComponentStory } from "@storybook/react";

import TimePosted from "../components/TimePosted";

export default {
  component: TimePosted,
  title: "TimePosted",
} as ComponentMeta<typeof TimePosted>;

const Template: ComponentStory<typeof TimePosted> = (args) => (
  <TimePosted {...args} />
);

export const Default = Template.bind({});

Default.args = {
  date: "07.06.2022 07:30",
  timePosted: "...",
};

export const MinutesAgo = Template.bind({});

MinutesAgo.args = {
  date: "07.06.2022 07:30",
  timePosted: "2 min ago",
};

export const HouresAgo = Template.bind({});

HouresAgo.args = {
  date: "07.06.2022 07:30",
  timePosted: "15 hours ago",
};
