import style from "../Styles/UserInfo.module.css";
import { Avatar, Divider } from "@mui/material";

export const UserInfo = () => {
  return (
    <div id={style.UserInfo}>
      
      <div id={style.topDiv}>
        <Avatar sx={{ alignSelf:"center", width: 150, height: 150 }} src="/broken-image.jpg" />
        <div>
          <h2>Gaurav Arsod</h2>
          <h5>Pune, Maharashtra</h5>
        </div>
      </div>

      <div id={style.middleDiv}>
        <h5><span className={style.span}>Phone : </span> 9090909090</h5>
        <h5><span className={style.span}>E-mail : </span> ga@mail.com</h5>
        <h5><span className={style.span}>DOB : </span> 23-10-9999</h5>
      </div>

      <Divider variant="middle" />

      <div id={style.bottom}>
        <div>
          <h4>Media(10)</h4>
          <h4>See all</h4>
        </div>

        <div id={style.images}>
          <Avatar variant="square" sx={{width: 100, height: 100}}/>
          <Avatar variant="square" sx={{width: 100, height: 100}}/>
          <Avatar variant="square" sx={{width: 100, height: 100}}/>
          <Avatar variant="square" sx={{width: 100, height: 100}}/>
        </div>
      </div>
    </div>
  )
}
