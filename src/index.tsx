import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import SetUp from '@views/pages/SetUp';
import { env } from './env/envConfig';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path={env.prefix} component={SetUp} />
			<Redirect from={'/'} to="/github-blog/home" />
		</Switch>
	</Router>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
