import { useState } from 'react';
import CodeIcon from '@mui/icons-material/Code';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import AccountCircle from '@mui/icons-material/AccountCircle';

function index() {
	const [inputData, setInputData] = useState({
		username: '',
		password: '',
	});
	const [showPassword, setShowPassword] = useState(false);
	const handleChange = (prop) => (event) => {
		setInputData({ ...inputData, [prop]: event.target.value });
	};
	return (
		<>
			<Container
				sx={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
				}}>
				<Box sx={{ marginTop: '5%' }}>
					<CodeIcon sx={{ height: '70px', width: '70px' }} />
				</Box>
				<br />
				<Box
					component='form'
					sx={{
						width: 450,
						height: 350,
						borderRadius: '1rem',
						border: '2px solid #414a4c',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<TextField
						id='outlined-basic'
						placeholder='User Name'
						variant='outlined'
						sx={{ marginTop: '7%', width: '75%' }}
						value={inputData.username}
						onChange={handleChange('username')}
						InputProps={{
							startAdornment: (
								<InputAdornment position='start'>
									<AccountCircle />
								</InputAdornment>
							),
						}}
					/>
					<OutlinedInput
						sx={{ marginTop: '7%', width: '75%' }}
						id='outlined-adornment-password'
						type={showPassword ? 'text' : 'password'}
						value={inputData.password}
						onChange={handleChange('password')}
						placeholder='Password'
						endAdornment={
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={() => setShowPassword(!showPassword)}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
					<Button variant='outlined' sx={{ height: '2.5rem', marginTop: '5%' }}>
						SIGN IN
					</Button>
					<Box sx={{ marginTop: '5%' }}>
						<IconButton>
							<GoogleIcon></GoogleIcon>
						</IconButton>
						<IconButton>
							<GitHubIcon></GitHubIcon>
						</IconButton>
						<IconButton>
							<FacebookIcon></FacebookIcon>
						</IconButton>
					</Box>
				</Box>
			</Container>
		</>
	);
}

export default index;
