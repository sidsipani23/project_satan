import Navbar from '../components/Navbar';
import Container from '@mui/material/Container';
export default function Custom404() {
	return (
		<>
			<Navbar />
			<Container
				sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
				<div className='typewriter'>
					<h1>404 - Page Not Found!</h1>
				</div>
			</Container>
		</>
	);
}
