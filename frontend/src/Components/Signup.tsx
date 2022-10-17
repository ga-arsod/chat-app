import { useState } from "react";
import TextField from '@mui/material/TextField';
import style from "../Styles/Signup.module.css";


export const Signup = () => {
    return (
        <div id={style.signupContainer}>
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
