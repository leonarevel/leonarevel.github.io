import React, { useEffect, useRef, useState } from "react";

import MyTitle from "./MyTitle";
import MyContent from "./MyContent";
import MyBottomNavigation from "./MyBottomNavigation";
import MyZoomedImage from "./MyZoomedImage";

import {
  Box,
  Container,
  createTheme,
  CssBaseline,
  Stack,
  ThemeProvider,
} from "@mui/material";
import MyBackground from "./MyBackground";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
  let myImageListRef = useRef(null);
  let myIntroductionRef = useRef(null);
  let myContactsRef = useRef(null);
  let [zoomedImage, setZoomedImage] = useState([]);

  let [backgroundSvg, setBackgroundSvg] = useState(null);

  let [theme, setTheme] = useState(null);

  useEffect(() => {
    fetch("/background.json")
      .then((b) => b.json())
      .then((bg) => {          
          const selectedTheme = bg[getRandomInt(0, bg.length - 1)]

          setTheme(
            createTheme({
              cssVariables: true,
              palette: {
                mode: "dark",
                ...selectedTheme.palette,
              },
            })
          );
  
          setBackgroundSvg(selectedTheme.url);
        

        
      });
  }, []);

  return (
    theme && backgroundSvg ? <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <MyBackground svg={backgroundSvg} />
        <Container fixed sx={{ display: "flex" }}>
          <MyZoomedImage
            zoomedImage={zoomedImage}
            setZoomedImage={setZoomedImage}
          />
          <Stack sx={{ zIndex: 0 }}>
            <Box sx={{ marginBottom: "6em" }}>
              <MyTitle />
              <MyContent
                myImageListRef={myImageListRef}
                myIntroductionRef={myIntroductionRef}
                myContactsRef={myContactsRef}
                setZoomedImage={setZoomedImage}
              />
            </Box>
            <MyBottomNavigation
              myImageListRef={myImageListRef}
              myIntroductionRef={myIntroductionRef}
              myContactsRef={myContactsRef}
            />
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  : null);
}

export default App;
