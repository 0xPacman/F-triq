// as a result of two days experiance : ensa khouribga seems like the worst IT school out there.

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import {Icon} from 'leaflet';

// components
import Header from './components/Header';
import Login from './components/Login';
//css
import './styles/header.css';
import './App.css';

function App() {

	let stationsCord = [
		[32.89124099201341, -6.910804874221451],
		[32.882170114189925, -6.917776885975901],
		[32.87378992302474, -6.9113862965221085],
		[32.898938338484335, -6.915159131100859],
		[32.899272308140645, -6.925500861998146],
		[32.89506432225674, -6.892110972677182],
		[32.87984024047166, -6.93086530489838],
		[32.88941186574439, -6.9378560610433695],
	];

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState(null);
	const [School_icon, setSchoolIcon] = useState(
		new Icon({
			iconUrl:'/icons/school-icon.svg',
			iconSize:[38,38]
		})
	);
	const [station_icon, setstationicon] = useState(
		new Icon({
			iconUrl:'/icons/station_icon.svg',
			iconSize:[38,38]
		})
	);
	const [bus_icon, setbusicon] = useState(
		new Icon({
			iconUrl:'/icons/bus_icon.svg',
			iconSize:[38,38]
		})
	);

	const all_stations = () => {
		return stationsCord.map((station, index) => {
			return (
				<Marker key={index} position={station} icon={station_icon}>
					<Popup>
						<span>
							<h3>Station {index+1}</h3>
						</span>
					</Popup>
				</Marker>
			)
		})
	}

	useEffect(() => {
		
	});

	const set_an_email = (email) => {
		setEmail(email);
	}

	const position = [32.887605635855, -6.916444077641842];
	const SchoolPosition = [32.88221563151361, -6.897819868535854];

	const render = () => {
		if (email.length > 0) {
			return (
				<div className='App'>
					<Header />
					<MapContainer center={position} zoom={14} scrollWheelZoom={true}>
						<TileLayer
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={SchoolPosition} icon={School_icon}>
							<Popup>
								School
							</Popup>
						</Marker>
						<Marker position={[32.88007911781138, -6.901277594770779]} icon={bus_icon}>
							<Popup>
								Buss
							</Popup>
						</Marker>
						{all_stations()}
						
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



