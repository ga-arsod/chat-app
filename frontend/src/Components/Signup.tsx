import { useState } from "react";
import TextField from '@mui/material/TextField';
import style from "../Styles/Signup.module.css";
import MenuItem from '@mui/material/MenuItem';
import {FormControl, InputLabel, Select, SelectChangeEvent} from "@mui/material";

export const Signup = () => {
    const [age, setAge] = useState<string>('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <div id={style.signupContainer}>
            <form action="">
                <TextField
                    fullWidth
                    id="standard-error-helper-text"
                    label="Name"
                    variant="standard"
                    name="name"
                />
                <TextField
                    fullWidth
                    id="standard-error-helper-text"
                    label="E-mail"
                    variant="standard"
                    name="email"
                />
                <TextField
                    fullWidth
                    id="standard-error-helper-text"
                    label="Phone Number"
                    name="phoneNumber"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    id="standard-error-helper-text"
                    label="City"
                    name="city"
                    variant="standard"
                />
                <FormControl fullWidth variant="standard" >
                    <InputLabel id="demo-simple-select-standard-label">State</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Gujrat">Gujrat</MenuItem>
                        <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                        <MenuItem value="Karnataka">Karnataka</MenuItem>
                        <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                        <MenuItem value="Kerala">Kerala</MenuItem>
                        <MenuItem value="Telangana">Telangana</MenuItem>
                    </Select>
                </FormControl>
                

                <TextField
                    fullWidth
                    id="standard-error-helper-text"
                    label="Password"
                    variant="standard"
                    name="password"
                />
                <TextField
                    id="standard-error-helper-text"
                    label="Confirm Password"
                    //   helperText="Incorrect entry."
                    variant="standard"
                //   color="error"
                // onChange={(e) => {
                //     setValidate(e.target.value);
                // }}
                />

                <button>Sign Up</button>
            </form>
        </div>
    )
}
