import { Box } from '@material-ui/core';
import { NavBar } from '../components';

const PageWrapper: React.FC = ({ children }) => (
	<Box>
		<NavBar />
		{/* {children} */}
	</Box>
);

export { PageWrapper };
