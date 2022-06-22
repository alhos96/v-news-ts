import { ComponentMeta, ComponentStory } from "@storybook/react";

import ArticleBar from "../components/articleBar/ArticleBar";

export default {
  component: ArticleBar,
  title: "ArticleBar",
} as ComponentMeta<typeof ArticleBar>;

const Template: ComponentStory<typeof ArticleBar> = (args) => (
  <ArticleBar {...args} />
);

export const Default = Template.bind({});

Default.args = {
  username: "Alija Hodzic",
  avatar:
    "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
  date: "2022-01-10T10:27:59Z",
};
