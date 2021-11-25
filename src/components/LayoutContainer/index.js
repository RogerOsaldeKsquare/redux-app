import {Box} from '@mui/material';
import NavBar from '../NavBar';

export default function LayoutContainer({ children }) {
    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        >
            <NavBar />
            {children}
        </Box>
    )
}

