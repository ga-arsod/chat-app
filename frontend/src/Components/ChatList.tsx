import {useState} from "react";
import { Avatar, Paper, InputBase, IconButton, Divider, Fab, Tooltip } from "@mui/material"
import styles from "../Styles/ChatList.module.css";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

export const ChatList = () => {
    const [search, setSearch] = useState<string>("");

  return (
    <div id={styles.ChatListContainer}>
          <div id={styles.headerContainer}>
            <div id={styles.Header}>
              <Avatar sx={{ width: 60, height: 60 }} src="/broken-image.jpg" />
              <div>
                <h2>Gaurav Arsod</h2>
                <h4>Software Developer</h4>
              </div>
            </div>

            <Paper
              id={styles.searchBox}
              component="form"
              sx={{ p: '0 2px', display: 'flex', alignItems: 'center', borderRadius: "50px" }}
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

          <div id={styles.chats}>
              <div className={styles.chatBox}>
                <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar}/>

                <div className={styles.person}>
                  <div>
                    <h3>Prateek Shukla</h3>
                    <h5 className={styles.time}>10:36 AM</h5>
                  </div>

                  <p className={styles.message}>Hello Sir, How are You?</p>
                </div>
              </div>

              <Divider variant="inset" />

        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />


        <div className={styles.chatBox}>
          <Avatar sx={{ width: 50, height: 50 }} src="/broken-image.jpg" className={styles.FrdAvatar} />

          <div className={styles.person}>
            <div>
              <h3>Prateek Shukla</h3>
              <h5 className={styles.time}>10:36 AM</h5>
            </div>

            <p className={styles.message}>Hello Sir, How are You?</p>
          </div>
        </div>

        <Divider variant="inset" />

          </div>

      {/* Floating Add icon to add new friend in the chat room */}
      <Tooltip title="New Chat">

        <Fab className={styles.floatButton} color="secondary" aria-label="add">
          
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  )
}
