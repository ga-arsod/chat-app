import {useState} from "react";
import TextField from '@mui/material/TextField';
import style from "../Styles/Login.module.css";


export const Login = () => {
    const [validate, setValidate] = useState<Boolean>(true)
    // console.log(validate);
  return (
      <div id={style.loginContainer}>

          <form action="">
              <TextField
              fullWidth
                  id="standard-error-helper-text"
                  label="E-mail"
                  //   helperText="Incorrect entry."
                  variant="standard"
              //   color="error"
              // onChange={(e) => {
              //     setValidate(e.target.value);
              // }}
              />
              <TextField
                  id="standard-error-helper-text"
                  label="Password"
                  //   helperText="Incorrect entry."
                  variant="standard"
              //   color="error"
              // onChange={(e) => {
              //     setValidate(e.target.value);
              // }}
              />
              
              <button>Login</button>
          </form>
      </div>
  )
}
