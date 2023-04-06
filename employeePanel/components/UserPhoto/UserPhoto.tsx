import { CardMedia } from "@mui/material";
import "./UserPhoto.css";

export const UserPhoto = () => {
  return (
    <CardMedia
        className="user-photo"
        component="img"
        height={200}
        sx={{borderRadius:"100px"}}
        image="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
        alt="user profile"
  />
  )
}
