import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  const [open ,setOpen] = useState(false);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }
  ))

  const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
  }))

  const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
  }))
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography sx={{display:{xs: "none", sm:"block"}}} variant='h6'>Social</Typography>
        <PetsIcon sx={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase placeholder='Search'/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MarkunreadIcon />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{width:"30px", height:"30px"}} onClick={e => setOpen(true)}/>
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{width: 30, height: 30}} src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885_1280.jpg&tbnid=aVgXecnmQ_f1MM&vet=12ahUKEwjxieyN_fODAxX0gokEHWFjA0QQMygAegQIARB0..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Flandscape%2F&docid=xUQE6fK4DV4_SM&w=1280&h=797&q=images&client=safari&ved=2ahUKEwjxieyN_fODAxX0gokEHWFjA0QQMygAegQIARB0' />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar