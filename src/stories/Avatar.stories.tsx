import { ComponentMeta, ComponentStory } from "@storybook/react";

import Avatar from "../components/avatar/Avatar";

export default {
  component: Avatar,
  title: "Avatar",
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

const styles = `
background-color: red; 
margin-left: 80px
`;

Default.args = {
  src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/ea7a3c32163929.567197ac70bda.png",
  styles: styles,
};
