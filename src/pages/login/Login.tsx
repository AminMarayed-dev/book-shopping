import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { getUserByFilter, getUsers, postUsers } from "../../api/users.api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
// import { LoadingButton } from '@mui/lab';

export default function SignIn() {
  // mode = 1 => sign in & mode = 2 => sign up
  const [mode, setMode] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
    
  // };

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, email, password } = event.target;
    if (username.value && email.value && password.value) {
      const newUser = {
        id: Date.now(),
        username: username.value,
        email: email.value,
        password: password.value,
      };
      setIsLoading(true);
      postUsers(newUser).then((res) => {
        if (res.status === 201) {
          localStorage.setItem("isLogin", JSON.stringify(true));
          toast.success("اطلاعات کاربر با موفقیت افزوده شد", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            });
          navigate('/')
          
        }
      });
    } else {
      toast.error('ثبت نام ناموفق بود')
    }
    setIsLoading(false)
  };

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const {  email, password } = event.target;
    getUserByFilter({email:email.value, password:password.value}).then((res) => {
      try {
        if(res.data.length === 1) {
          localStorage.setItem("isLogin", JSON.stringify(true));
          toast.success("ورود شما با موفقیت انجام شد", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
            });
          navigate('/')
        }
        else{
          toast.error("ایمیل یا رمز عبور نادرست است")
        }
      } catch (error) {
        toast.error("مشکل پیش اومده راشد")
      }
    })
  }

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
            onSubmit={handleSignIn}
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
