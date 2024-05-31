// import { Box, Button, Paper, TextField } from "@mui/material";

// function Login() {
//   return (
//     <Box
//       sx={{ display: "flex", flexDirection: "column", p: "1rem" }}
//       component={Paper}
//     >
//       <TextField id="outlined-basic" label="نام کاربری" variant="outlined" />
//       <TextField id="outlined-basic" label="رمز عبور" variant="outlined" />
//       <Button variant="contained">ورود</Button>
//     </Box>
//   );
// }

// export default Login;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { postUsers } from "../../api/users.api";
import { LegendToggleTwoTone } from "@mui/icons-material";

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function SignIn() {
  // mode = 1 => sign in & mode = 2 => sign up
  const [mode, setMode] = React.useState(1);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const handleSignUp =  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, email, password } = event.target;
    if (username.value && email.value && password.value) {
      const newUser = {
        id: Date.now(),
        username: username.value,
        email: email.value,
        password: password.value,
      };
      postUsers(newUser).then((res) => console.log(res));
    } else {
      alert("please write empty field form");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          ورود
        </Typography>
        {mode === 1 ? (
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ورود به سایت
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link variant="body2">{"فراموشی رمز عبور"}</Link>
              </Grid>
              <Grid item>
                <Button onClick={() => setMode(2)}>ثبت نام</Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSignUp}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="نام کاربر"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="ایمیل"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="رمز عبور"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              ثبت نام
            </Button>
            <Grid container>
              <Grid item>
                <Button onClick={() => setMode(1)}>ورود</Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
}
