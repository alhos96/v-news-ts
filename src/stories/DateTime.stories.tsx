import { ComponentMeta, ComponentStory } from "@storybook/react";

import DateTime from "../components/dateTime/DateTime";

export default {
  component: DateTime,
  title: "DateTime",
} as ComponentMeta<typeof DateTime>;

const Template: ComponentStory<typeof DateTime> = (args) => (
  <DateTime {...args} />
);

export const Default = Template.bind({});

Default.args = {
  date: new Date().toISOString(),
};

export const RecentPast = Template.bind({});

RecentPast.args = {
  date: "2022-06-10T10:27:59Z",
};

export const HoursAgo = Template.bind({});

HoursAgo.args = {
  date: "2022-06-22T08:27:59Z",
};
