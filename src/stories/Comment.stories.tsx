import { ComponentMeta, ComponentStory } from "@storybook/react";

import Comment from "../components/comment/Comment";

export default {
  component: Comment,
  title: "Comment",
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const Default = Template.bind({});

Default.args = {
  username: "Irma Petrić",
  avatar: "https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg",
  date: "07.06.2022 08:45",
  commentText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditis a impedit dolore eum nesciunt inventore amet deserunt quidem nisi molestias?",
};

export const LongComment = Template.bind({});

LongComment.args = {
  ...Default.args,
  commentText:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque magnam amet error optio harum necessitatibus, aspernatur sed commodi ipsam deleniti. Mollitia quasi sed error aut ut inventore quia dolore ipsum?Officiis quas ipsa quidem odio libero nesciunt voluptatum facilis! Itaque enim sed ipsa error repudiandae? Officia tempore voluptatem quidem laudantium. Aliquid incidunt ea sit placeat quod earum quidem numquam vero!Quod aliquid id accusantium deleniti dolore culpa voluptate voluptates molestias! Ipsam reprehenderit tenetur animi veritatis nulla magni voluptatem quod dolorem dolore facilis, maxime praesentium reiciendis repudiandae vero eveniet quisquam molestiae.Aperiam inventore, ab mollitia accusantium excepturi non odio cum harum sequi commodi omnis officiis eveniet neque optio repudiandae nostrum illo quae perspiciatis? Magni adipisci consectetur deleniti velit facere tenetur quos?Voluptates neque laboriosam quia cum eos error consectetur officia maiores culpa nesciunt adipisci, quae illo, quibusdam consequuntur perferendis fuga id et veniam repellat? Perferendis ex quas illum architecto temporibus numquam.Minus quia ipsa quisquam reiciendis quibusdam consectetur vel, est, numquam, rerum quos veniam excepturi laboriosam aspernatur sit necessitatibus assumenda vitae! Assumenda, aliquid necessitatibus fugiat laborum molestiae ut alias nesciunt temporibus.Dolorum qui placeat exercitationem deleniti at quidem similique tempore hic ad vero dignissimos tempora, sit perspiciatis reprehenderit consequatur recusandae illum quam mollitia, iure unde aut, quisquam quasi. Quas, consequuntur dolorem!Harum voluptatem possimus neque id repellendus provident nulla molestias voluptate ab, corporis inventore illo consequatur quasi earum perferendis ipsam ducimus dicta quibusdam ipsa. Recusandae hic, veniam dolores laborum sequi quidem!",
};
