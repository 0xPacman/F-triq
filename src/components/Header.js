import React, { useState, useEffect } from 'react';

function Header() {
	
	return (
		<header className='App-header'>
			<div className='logo'>
				<div className='circle'></div>
				<div className='name'>F'triq</div>
			</div>
			<div className='menu'>
				<svg width='35' height='29' viewBox='0 0 35 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M4.03845 24.5814V21.8837H30.2885V24.5814H4.03845ZM4.03845 15.1395V12.4419H30.2885V15.1395H4.03845ZM4.03845 5.69767V3H30.2885V5.69767H4.03845Z'
						fill='white'
					/>
				</svg>
			</div>
		</header>
	);
}

export default Header;