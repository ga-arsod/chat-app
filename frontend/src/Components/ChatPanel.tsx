import {useState} from "react";
import { Avatar, Divider, Button, Menu, MenuItem } from "@mui/material";
import style from "../Styles/ChatPanel.module.css";
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'; 
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHoriz';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export const ChatPanel = () => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div id={style.ChatPanel}>
      <div id={style.Header}>
        <div id={style.headerLeft}>
          <Avatar sx={{ width: 40, height: 40 }} src="/broken-image.jpg" />
          <h4>Gaurav Arsod</h4>
        </div>

        <div id={style.headerRight}>
          <VideocamOutlinedIcon style={{ color: "gray" }} />
          <CallOutlinedIcon style={{ color: "gray" }}/>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <MoreHorizOutlinedIcon style={{color: "gray"}}/>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose}>Contact Info</MenuItem>
            <MenuItem onClick={handleClose}>Mute Notifications</MenuItem>
            <MenuItem onClick={handleClose}>Clear Messages</MenuItem>
            <MenuItem onClick={handleClose}>Delete Chat</MenuItem>
          </Menu>
        </div>
      </div>
      <Divider variant="middle" />

      <div id={style.MessageContainer}>
        
      </div>
      <Divider variant="middle" />

      <div id={style.Bottom}>
        <Paper
          component="form"
          sx={{ p: '1px 3px', display: 'flex', alignItems: 'center' }}
        >
          <IconButton sx={{ p: '10px' }} aria-label="menu">
            <MicNoneOutlinedIcon />
          </IconButton>
          <InputBase
            sx={{ flex: 1 }}
            placeholder="Type a message"
            inputProps={{ 'aria-label': 'type a message' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <AttachmentOutlinedIcon />
          </IconButton>
          {/* <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" /> */}
          <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
            <SentimentSatisfiedOutlinedIcon style={{color:"gray"}}/>
          </IconButton>
        </Paper>
      </div>
    </div>
  )
}
