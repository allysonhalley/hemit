import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <Box xs={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        id="basic-button"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose} > Hello </MenuItem>
                        <MenuItem onClick={handleClose} > Welcome </MenuItem>
                        <MenuItem onClick={handleClose} > Coming Soon </MenuItem>
                    </Menu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1}} >
                        H&F - tech intelligence
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
