export interface IPost {
  creator: string;
  avatar: string;
  date: string;
  post_text: string;
  post_image: string;
  post_headline: string;
  shared_with: ISharedWith[];
  comments: IComment[];
  likes: { likedBy: string }[];
}

export interface INewsPostProps {
  barData: IBarData;
  postData: IPostData;
  commentData: IComment[];
}

export interface IIcon {
  icon: any;
  label: string;
}

export interface IActionIconsProps {
  icons: IIcon[];
}

export interface IComment {
  creator: string;
  avatar: string;
  date: string;
  commentText: string;
}

export interface ICommentProps {
  avatar: string;
  username: string;
  date: string;
  timePosted: string;
  commentText: string;
  numberOfComments: number;
  currentCommentPosition: number;
}

export interface IToggleButtonProps {
  icon?: any;
  label: string;
  styles?: any;
  clickHandler: () => void;
}

export interface ISharedWithProps {
  sharedWith: ISharedWith[];
}

export interface ISharedWith {
  avatar: string;
  name: string;
}

export interface IBarData {
  avatar: string;
  username: string;
  date: string;
  timePosted?: string;
}

export interface IDateTimeProps {
  date: string;
  timePosted: string;
}

export interface IPostData {
  headline: string;
  postText: string;
  postPicture: string;
  sharedWith: ISharedWith[];
}
