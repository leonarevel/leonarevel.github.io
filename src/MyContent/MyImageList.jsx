import { Grow, ImageList, ImageListItem, makeStyles, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import MyImageListItem from "./MyImageList/MyImageListItem";

function MyImageList({ setShow, myImageListRef, setZoomedImage }) {
  let [galleryFiles, setGalleryFiles] = useState(null);


  useEffect(() => {
    fetch("gallery.json")
      .then((g) => g.json())
      .then((g) => setGalleryFiles(g))
      .then((g) => setShow(true));
  }, [setShow]);

  const isLandscape = useMediaQuery('(min-width:600px)');

  return ( galleryFiles?
    <div ref={myImageListRef}>
       <ImageList gap={24} variant="masonry" cols={isLandscape ? 4 : 2}>
        {galleryFiles.map((galleryFile, index) => {
          return <MyImageListItem galleryFile={galleryFile} galleryFiles={galleryFiles} index={index} setZoomedImage={setZoomedImage} />;
        })}
      </ImageList>
    </div> : null
  );
}

export default MyImageList;
