import {useState} from "react";
import { Avatar, Paper, InputBase, IconButton } from "@mui/material"
import styles from "../Styles/ChatList.module.css";
import SearchIcon from '@mui/icons-material/Search';


export const ChatList = () => {
    const [search, setSearch] = useState<string>("");

  return (
    <div id="ChatListContainer">
        <div id={styles.Header}>
              <Avatar sx={{ width: 60, height: 60 }} src="/broken-image.jpg" />
            <div>
                <h2>Gaurav Arsod</h2>
                <h4>Software Developer</h4>
            </div>
        </div>

          <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: "50px" }}
          >
              <InputBase
                  sx={{ ml: 2, flex: 1 }}
                  placeholder="Search Friend"
                  inputProps={{ 'aria-label': 'search google maps' }}
                  onChange={(el) => {
                    console.log(el.target.value);
                  }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search"
                  onClick={() => {
                      console.log("hello")
                  }}>
                  <SearchIcon />
              </IconButton>
          </Paper>
    </div>
  )
}
