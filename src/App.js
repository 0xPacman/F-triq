import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer} from 'react-leaflet'


// components
import Header from './components/Header';
import Login from './components/Login';
//css
import './styles/header.css';
import './App.css';




function App() {

	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	useEffect(() => {
		
		
	});

	const set_an_email = (email) => {
		setEmail(email);
	}

	const position = [32.887605635855, -6.916444077641842];

	const render = () => {
		if (email != null) {
			return (
				<div className='App'>
					<Header />
					<MapContainer center={position} zoom={14} scrollWheelZoom={true}>
						<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
					</MapContainer>
				</div>
			);
		} else {
			return (
				<div className='App'>
					<Login set_email={set_an_email} />
				</div>
			);
		}
	}

    return render();
}

export default App;
