import { Box, Grow, Typography } from "@mui/material";

function MyTitle() {
  return (
    <Box>
      <Grow in={true} timeout={500}>
        <Box>
          <Typography variant="h3" marginTop={4}>
            Leonardo
          </Typography>
          <Typography variant="h4" marginBottom={4}>
            Revelchione
          </Typography>
        </Box>
      </Grow>
    </Box>
  );
}

export default MyTitle;
