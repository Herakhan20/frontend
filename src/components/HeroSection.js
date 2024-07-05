// src/components/HeroSection.js
import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';
import ReferralForm from './ReferralForm';

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="hero-section">
      <Typography variant="h2" gutterBottom>
        Refer & Earn
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        Refer Now
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style }}>
          <ReferralForm />
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default HeroSection;
