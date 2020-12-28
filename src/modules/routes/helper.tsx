import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { env } from '../../env/envConfig';
import Home from '@views/pages/Home';
import Tag from '@views/pages/Tag';
import Category from '@views/pages/Category';
import About from '@views/pages/About';
import Post from '@views/pages/Post';

export const switchRoutes = (): any => {
	console.log(env.prefix + '/home');
	return (
		<Switch>
			<Route path={env.prefix + '/home'} component={Home} exact />
			<Route path={env.prefix + '/tags'} component={Tag} />
			<Route path={env.prefix + '/posts/:postId'} component={Post} />
			<Route path={env.prefix + '/category'} component={Category} exact />
			<Route path={env.prefix + '/about'} component={About} exact />
			<Redirect from={env.prefix} to={env.prefix + '/home'} />
		</Switch>
	);
};
