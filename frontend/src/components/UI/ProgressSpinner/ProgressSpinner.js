import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProgressSpinner = () => {
    return (
        <Box sx={{ display: 'flex', marginTop: '5rem' }}>
            <CircularProgress />
        </Box>
    )
}

export default ProgressSpinner;
