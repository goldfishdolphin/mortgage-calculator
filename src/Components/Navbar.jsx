import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography>
                        Bank
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
