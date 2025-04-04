import MyContacts from "./MyContent/MyContacts";
import MyImageList from "./MyContent/MyImageList";
import MyIntroduction from "./MyContent/MyIntroduction";

import { Box, Grow, Stack } from "@mui/material";
import { useState } from "react";

function MyContent({ myImageListRef, myIntroductionRef, myContactsRef, setZoomedImage }) {
  let [show, setShow] = useState(false);

  return (
    <Stack gap={4}>
        <Grow timeout={500} in={show}>
          <Box>
            <MyImageList setShow={setShow} myImageListRef={myImageListRef} setZoomedImage={setZoomedImage} />
          </Box>
        </Grow>
        <Grow  timeout={1000} in={show}>
          <Box>
            <MyIntroduction myIntroductionRef={myIntroductionRef} />
          </Box>
        </Grow>
        <Grow  timeout={1500} in={show}>
          <Box>
            <MyContacts myContactsRef={myContactsRef} />
          </Box>
        </Grow>
    </Stack>
  );
}

export default MyContent;
