import React from 'react';
import './App.css';

import Routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Routes />
			<ToastContainer autoClose={5000} />
		</>
	);
}

export default App;
