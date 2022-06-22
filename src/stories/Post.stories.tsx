import { ComponentMeta, ComponentStory } from "@storybook/react";

import Post from "../components/post/Post";

export default {
  component: Post,
  title: "Post",
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const WithoutHeadline = Template.bind({});

WithoutHeadline.args = {
  headline: "",
  postText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic illum unde ducimus deleniti repellat omnis cumque nesciunt! Beatae similique expedita voluptates minus. Quia, placeat omnis. Sunt nemo magnam suscipit aspernatur!",
  postPicture: "",
  sharedWith: [
    {
      avatar: "https://robohash.org/ullamipsavelit.png?size=50x50&set=set1",
      name: "Nicky Ciepluch",
    },
    {
      avatar: "https://robohash.org/recusandaeautnatus.png?size=50x50&set=set1",
      name: "Warner Garment",
    },
    {
      avatar:
        "https://robohash.org/praesentiumvoluptaspariatur.png?size=50x50&set=set1",
      name: "Mitchel Beville",
    },
  ],
};

export const WithHeadline = Template.bind({});

WithHeadline.args = {
  ...WithoutHeadline.args,
  headline: "A very warm welcome",
};

export const WithPicture = Template.bind({});

WithPicture.args = {
  ...WithHeadline.args,
  postPicture:
    "https://justcreative.com/wp-content/uploads/2022/03/WFH_Featured-Image-2.png.webp",
};
