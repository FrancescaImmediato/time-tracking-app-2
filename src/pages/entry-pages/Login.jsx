import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
      
      if (response.data.access_token) {
        // Store the token in localStorage or a more secure storage method
        localStorage.setItem('token', response.data.access_token);
        console.log('Login successful');
        navigate('/Tracker'); // Redirect after successful login
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half">
              <div className="box">
                <h1 className="title is-4 has-text-centered">Login</h1>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                        
                      </span>
                    </div>
                    <Link to="/ForgotPw" className="has-text-primary is-underlined hover:text-danger">Forgot Password?</Link>
                  </div>


                  <buttons>
                      <button className="button is-primary is-fullwidth" type="submit">
                        Login </button>

                      <Link to="/register" className="button is-primary is-fullwidth is-outlined">Create Account</Link>
                  </buttons>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





// import Input from '@mui/joy/Input';
// import Button from '@mui/joy/Button';
// import Stack from '@mui/joy/Stack';
// import Link from '@mui/material/Link';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import epochLogo from '../../assets/epochLogo.png';
// import Paper from '@mui/material/Paper';



// export default function LogIn() {
//   return (
//     <>
//     <style>
//         {`
//           body {
//             background-color: #9dc183;
//             margin: 0; 
//             height: 100vh; 
//             display: flex;
//             justify-content: center;
//             align-items: center;
//           }
//         `}
//       </style>
//       <Paper sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', padding:'0rem 1rem 3rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.5)', 
//         backdropFilter: 'blur(10px)' }} elevation={12} square={false}>
//         <CardMedia
//           component="img"
//           sx={{ height: 225 }}
//           image={epochLogo}
//           alt="Epoch"
//           margin="0"
//         />
//         <CardContent>
//         <Typography>Time Well Spent Starts Here...</Typography>
//           <Typography gutterBottom variant="h5" component="div">
//             Log In
//           </Typography>
//           <form
//             action=""
//             onSubmit={(event) => {
//               event.preventDefault();
//               const formData = new FormData(event.currentTarget);
//               const formJson = Object.fromEntries(formData.entries());
//               alert(JSON.stringify(formJson));
//             }}
//           >
//             <Stack spacing={1}>
//               <Input
//                 type="email"
//                 placeholder="Type your email here"
//                 variant="plain"
//                 size="md"
//                 required
//                 sx={{
//                   '&::before': {
//                     border: '1.5px solid var(--Input-focusedHighlight)',
//                     transform: 'scaleX(0)',
//                     left: '2.5px',
//                     right: '2.5px',
//                     bottom: 0,
//                     top: 'unset',
//                     transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
//                     borderRadius: 0,
//                     borderBottomLeftRadius: '64px 20px',
//                     borderBottomRightRadius: '64px 20px',
//                   },
//                   '&:focus-within::before': {
//                     transform: 'scaleX(1)',
//                   },
//                 }}
//               />
//               <Input
//                 type="password"
//                 placeholder="Password"
//                 variant="plain"
//                 size="md"
//                 required
//                 sx={{
//                   '&::before': {
//                     border: '1.5px solid var(--Input-focusedHighlight)',
//                     transform: 'scaleX(0)',
//                     left: '2.5px',
//                     right: '2.5px',
//                     bottom: 0,
//                     top: 'unset',
//                     transition: 'transform .15s cubic-bezier(0.1,0.9,0.2,1)',
//                     borderRadius: 0,
//                     borderBottomLeftRadius: '64px 20px',
//                     borderBottomRightRadius: '64px 20px',
//                   },
//                   '&:focus-within::before': {
//                     transform: 'scaleX(1)',
//                   },
//                 }}
//               />
//               <Button>Sign in</Button>
//               <Link href="#" underline="hover">
//                 {'Forgot Password'}
//               </Link>
//             </Stack>
//           </form>
//         </CardContent>
//       </Paper>
//     </>
//   );
// }