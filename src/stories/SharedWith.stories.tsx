import { ComponentMeta, ComponentStory } from "@storybook/react";

import SharedWith from "../components/sharedWith/SharedWith";

export default {
  component: SharedWith,
  title: "SharedWith",
} as ComponentMeta<typeof SharedWith>;

const Template: ComponentStory<typeof SharedWith> = (args) => (
  <SharedWith {...args} />
);

export const WithFewShares = Template.bind({});

WithFewShares.args = {
  sharedWith: [
    {
      avatar:
        "https://robohash.org/aliquamarchitectonon.png?size=50x50&set=set1",
      name: "Gladi Guitonneau",
    },
    {
      avatar: "https://robohash.org/deserunteumminus.png?size=50x50&set=set1",
      name: "Clayson Wheater",
    },
    {
      avatar:
        "https://robohash.org/veritatisomnisanimi.png?size=50x50&set=set1",
      name: "Nicolette Prescott",
    },
  ],
};

export const WithManyShares = Template.bind({});

WithManyShares.args = {
  sharedWith: [
    {
      avatar:
        "https://robohash.org/aliquamarchitectonon.png?size=50x50&set=set1",
      name: "Gladi Guitonneau",
    },
    {
      avatar: "https://robohash.org/deserunteumminus.png?size=50x50&set=set1",
      name: "Clayson Wheater",
    },
    {
      avatar:
        "https://robohash.org/veritatisomnisanimi.png?size=50x50&set=set1",
      name: "Nicolette Prescott",
    },
    {
      avatar:
        "https://robohash.org/aliquamarchitectonon.png?size=50x50&set=set1",
      name: "Gladi Guitonneau",
    },
    {
      avatar: "https://robohash.org/deserunteumminus.png?size=50x50&set=set1",
      name: "Clayson Wheater",
    },
    {
      avatar:
        "https://robohash.org/veritatisomnisanimi.png?size=50x50&set=set1",
      name: "Nicolette Prescott",
    },
  ],
};

export const WithoutShares = Template.bind({});

WithoutShares.args = {
  sharedWith: [],
};
