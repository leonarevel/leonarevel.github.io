import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid2,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import {} from "react-icons";

function MyContacts({ myContactsRef }) {
  let [socialFiles, setSocialFiles] = useState(null);

  useEffect(() => {
    (async function _() {
      let json = await fetch("/social.json").then((s) => s.json());
      let output = [];

      for (let sf of json) {
        let sfc = await fetch(sf.icon).then((s) => s.text());
        output.push({icon: sfc, link: sf.link, title: sf.title});
      }

      setSocialFiles(output);
    })();
  }, []);

  return (socialFiles ? 
    <div ref={myContactsRef}>
      <Card>
        <Container>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Stack gap={1}>
                <Typography component="div" variant="h5">
                  Contatti
                </Typography>
                <Divider />
                <Grid2 justifyContent="center" display="flex">
                  {socialFiles.map((socialFile) => (
                    <Tooltip title={socialFile.title}>
                      <IconButton href={socialFile.link}>
                        <div
                          style={{ width: "1.2em", height: "1.2em" }}
                          dangerouslySetInnerHTML={{ __html: socialFile.icon }}
                        />
                      </IconButton>
                    </Tooltip>
                  ))}
                </Grid2>
              </Stack>
            </CardContent>
          </Box>
        </Container>
      </Card>
    </div> : null
  );
}

export default MyContacts;
