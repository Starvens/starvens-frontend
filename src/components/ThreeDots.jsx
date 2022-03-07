import { Box } from "@mui/system";
import React from "react";

const ThreeDots = () => {
  return (
    <Box sx={{position:'fixed', top: '70%', left: '38%', fontWeight: '600', fontSize: '3rem'}}>
      <h3 style={{color: '#808080'}}>. . . </h3>
    </Box>
  );
};

export default ThreeDots;
