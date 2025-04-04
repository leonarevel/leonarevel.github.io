import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import Markdown from 'react-markdown'

function MyIntroduction({ myIntroductionRef }) {
  let [introduction, setIntroduction] = useState(null)

  useEffect(() => {
    fetch("/introduction.md").then(i => i.text()).then(i => setIntroduction(i))
  }, [])


  return (
    introduction ? <div ref={myIntroductionRef}>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/introduction.jpg"
          alt="Chi Sono Profilo"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Chi Sono
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ color: "text.secondary" }}
            >
              <Markdown>
              {introduction}
              </Markdown>
              
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div> : null
  );
}

export default MyIntroduction;
