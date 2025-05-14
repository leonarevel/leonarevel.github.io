import {
  ArrowBackIos,
  ArrowForwardIos,
  Close,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Card,
  ClickAwayListener,
  IconButton,
  Stack,
  Tooltip,
} from "@mui/material";

function MyZoomedImage({ zoomedImage, setZoomedImage }) {
  let [galleryFiles, index] = zoomedImage;

  let openBackdrop = zoomedImage.length !== 0;

  return (
    <Backdrop open={openBackdrop} sx={{ zIndex: 1 }}>
      {openBackdrop ? (
        <ClickAwayListener onClickAway={() => setZoomedImage([])}>
          <Stack
            width="100%"
            height="100%"
            direction="row"
            alignItems="center"
            gap={1}
            margin={2}
            justifyContent="space-between"
          >
            <Box zIndex={1}>
              <Tooltip
                onClick={() =>
                  setZoomedImage([
                    galleryFiles,
                    index - 1 < 0
                      ? galleryFiles.length - 1
                      : (index - 1) % galleryFiles.length,
                  ])
                }
              >
                <IconButton>
                  <ArrowBackIos />
                </IconButton>
              </Tooltip>
            </Box>
            <Stack alignItems="end" gap={2} height="100%" width="100%">
              <Card sx={{ display: "flex" }}>
                <Box position="fixed" marginTop="1em" zIndex={1}>
                  <Tooltip onClick={() => setZoomedImage([])}>
                    <IconButton>
                      <Close />
                    </IconButton>
                  </Tooltip>
                </Box>

                <Card
                  sx={{
                    position: "fixed",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    backgroundImage: "url(" + galleryFiles[index].replace("/", "/full_") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}
                />
              </Card>
            </Stack>

            <Box zIndex={1}>
              <Tooltip
                onClick={() =>
                  setZoomedImage([
                    galleryFiles,
                    (index + 1) % galleryFiles.length,
                  ])
                }
              >
                <IconButton>
                  <ArrowForwardIos />
                </IconButton>
              </Tooltip>
            </Box>
          </Stack>
        </ClickAwayListener>
      ) : null}
    </Backdrop>
  );
}

export default MyZoomedImage;
