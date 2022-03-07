import React from "react";
import { Box } from '@mui/system'

const Footer = () => {
  return (
    <Box sx={{position:'fixed', top: '80%', left: '13%', fontWeight: '600', fontSize: '3rem'}}>
      <p style={{color: 'white', fontSize: '1rem'}}>©2022 Starvens. All rights reserved.</p>
    </Box>
  );
};

export default Footer;
