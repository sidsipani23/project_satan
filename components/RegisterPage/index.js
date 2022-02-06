import { useState } from 'react';
import styles from '../../styles/Register.module.css';
import Container from '@mui/material/Container';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

function index() {
	const [inputData, setInputData] = useState({
		username: '',
		password: '',
		email: '',
	});
	const [showPassword, setShowPassword] = useState(false);
	const handleChange = (prop) => (event) => {
		setInputData({ ...inputData, [prop]: event.target.value });
	};
	return (
		<Container
			sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
			<div className={styles.typewriter}>
				<h1>Hello, friend.</h1>
			</div>
			<br />
			<TextField
				sx={{ marginTop: '7%', width: '35%' }}
				id='input-with-icon-textfield'
				placeholder='Enter a user name'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<AccountCircle fontSize='medium' />
						</InputAdornment>
					),
				}}
				variant='standard'
			/>
			<Input
				sx={{ marginTop: '4%', width: '35%' }}
				id='standard-adornment-password'
				type={showPassword ? 'text' : 'password'}
				value={inputData.password}
				onChange={handleChange('password')}
				placeholder='Create a password'
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={() => setShowPassword(!showPassword)}>
							{showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
			/>
			<TextField
				sx={{ marginTop: '4%', width: '35%' }}
				placeholder='Enter your email address'
				value={inputData.email}
				onChange={handleChange('email')}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<EmailIcon fontSize='medium' />
						</InputAdornment>
					),
				}}
				variant='standard'
			/>
			<Button variant='outlined' sx={{ height: '2.5rem', marginTop: '5%' }}>
				SIGN UP
			</Button>
			<Box sx={{ marginTop: '3%' }}>
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
		</Container>
	);
}

export default index;
