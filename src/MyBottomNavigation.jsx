import React from "react";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";

function MyBottomNavigation({ myImageListRef, myIntroductionRef, myContactsRef }) {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {                              
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Galleria" onClick={() => goTo(myImageListRef)} />
        <BottomNavigationAction label="Chi Sono" onClick={() => goTo(myIntroductionRef)} />
        <BottomNavigationAction label="Contatti" onClick={() => goTo(myContactsRef)} />
      </BottomNavigation>
    </Paper>
  );
}

function goTo(ref) {
  ref.current?.scrollIntoView({ behavior: 'smooth' })
}

export default MyBottomNavigation;
