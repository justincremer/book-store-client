import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Grid,
	Link,
} from '@material-ui/core';
import { MenuIcon } from '../svgs';

const NavLink = (props: { to: string; children: any }) => {
	const { to, children } = props;

	return (
		<Link href={to} style={{ textDecoration: 'none', color: 'white' }}>
			{children}
		</Link>
	);
};

const RedirectButtons = () => (
	<div>
		<NavLink
			to="/books"
			children={<Button color="inherit">Books</Button>}
		/>
		<NavLink
			to="/users"
			children={<Button color="inherit">Users</Button>}
		/>
		<NavLink
			to="/todos"
			children={<Button color="inherit">Todos</Button>}
		/>
	</div>
);

//TODO: move into api client
const ensureAuthenticated = (): boolean => false;
const AuthenticationButton = () => {
	const authenticated: boolean = ensureAuthenticated();

	if (authenticated) {
		return (
			<NavLink
				to="/logout"
				children={<Button color="inherit">Logout</Button>}
			/>
		);
	}

	return (
		<NavLink
			to="/login"
			children={<Button color="inherit">Login</Button>}
		/>
	);
};

const NavBar = () => (
	<AppBar position="static" color="secondary">
		<Toolbar>
			<Grid container justify="flex-start" alignItems="center">
				<IconButton edge="start" color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<NavLink
					to="/"
					children={
						<Typography
							variant="h6"
							style={{ paddingLeft: '1rem' }}
						>
							Book Store
						</Typography>
					}
				/>
			</Grid>
			<Grid container justify="center">
				<RedirectButtons />
			</Grid>
			<Grid container justify="flex-end">
				<AuthenticationButton />
			</Grid>
		</Toolbar>
	</AppBar>
);

export { NavBar };
