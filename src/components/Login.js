import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup} from 'react-leaflet'

// css
import '../styles/Login.css'


function Login(props) {

	const position = [32.887605635855, -6.916444077641842];

	return (
	<>
		<MapContainer center={position} zoom={14} scrollWheelZoom={true}>
			<TileLayer
			attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
		<div className='Container_login'>
			<div className='Container_login_form'>
				<div className='logo logo_login'>
					<div className='circle'></div>
					<div className='name'>F'triq</div>
				</div>
				<div className='Login_form'>
					<input id='email' type='text' placeholder='Email' />
					<input type='password' placeholder='Password' />
					<button className='login_button' onClick={() => 
						{
							props.set_email(document.getElementById('email').value)
						}
					}>Login</button>
				</div>
			</div>
		</div>
	</>
	);
}

export default Login;