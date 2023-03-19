import PlayTestCSS from './PlayTest.css'
import Button from "@mui/material/Button";
import { Box } from '@mui/material';
//0099ff
function PlayTest() {
    return (
        <Box>
            <Button variant="contained" fullWidth={false}>Hello</Button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#d45" fill-opacity="1" d="M0,160L34.3,186.7C68.6,213,137,267,206,256C274.3,245,343,171,411,160C480,149,549,203,617,213.3C685.7,224,754,192,823,170.7C891.4,149,960,139,1029,149.3C1097.1,160,1166,192,1234,208C1302.9,224,1371,224,1406,224L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
        </Box>
    );
}

export { PlayTest }