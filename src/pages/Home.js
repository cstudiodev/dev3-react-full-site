import Header from '../components/Header/index';
import MobileMenu from '../components/MobileMenu/index';
import Hero from '../components/Hero/index';
import React, { useState } from 'react';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} />
			<MobileMenu isOpen={isOpen} toggle={toggle} />
			<Hero />
		</>
	);
};

export default Home;
