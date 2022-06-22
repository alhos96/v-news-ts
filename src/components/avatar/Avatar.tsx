import { Avatar as MUIAvatar } from "@mui/material";
import { styled } from "@mui/system";

interface IAvatar {
  src: string;
  id?: string;
  height?: number;
  width?: number;
  translateY?: number;
  translateX?: number;
  bottom?: number;
  styles?: string;
}

const Avatar: React.FC<IAvatar> = (props) => {
  const { src, id, height, width, styles, translateY, translateX } = props;

  const CustomAvatar = styled(MUIAvatar)`
    height: ${height || 3.5}rem;
    width: ${width || 3.5}rem;
    transform: translateY(${translateY || 0}rem);
    transform: translateX(${translateX || 0}rem);
    background-color: white;
    box-shadow: 1px -1px 5px 1px rgba(146, 152, 155, 0.2);
    ${{ styles }}
  `;

  return <CustomAvatar alt="" id={id} src={src} />;
};

export default Avatar;
