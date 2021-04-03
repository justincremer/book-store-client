import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import { theme } from './shared/theme';
import { Home, Book, User, Todo } from './pages';
import { NavBar } from './shared/components';

const Main: React.FC = () => (
	<ThemeProvider theme={theme}>
		<NavBar />
		<Router>
			<Switch>
				<Route path="/" exact component={Home} />

				<Route path="/books" exact component={Book} />
				<Route path="/users" exact component={User} />
				<Route path="/todos" exact component={Todo} />
			</Switch>
		</Router>
	</ThemeProvider>
);

export default Main;
