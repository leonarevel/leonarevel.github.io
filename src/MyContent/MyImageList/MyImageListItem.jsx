import { Grow, ImageListItem } from "@mui/material";

function MyImageListItem({ galleryFile, galleryFiles, index, setZoomedImage }) {
  return (
    <Grow in={true} timeout={index * 500}>
      <ImageListItem sx={{ cursor: "pointer" }}>
        <img
          onClick={() => setZoomedImage([galleryFiles, index])}
          src={galleryFile}
          alt=""
        />
      </ImageListItem>
    </Grow>
  );
}

export default MyImageListItem;
