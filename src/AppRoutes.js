import { Routes, Route } from 'react-router-dom';
import Home from "./pages//Home/Home"
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';

function AppRoutes() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/about-me' element={<AboutMe />} />
		</Routes>
	);
}

export default AppRoutes;