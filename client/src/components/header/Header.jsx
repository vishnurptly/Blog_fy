
import { AppBar, Toolbar, styled } from '@mui/material';
import { Link } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';


const Component = styled(AppBar)`
    background: #145c51;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #ffffff;
        text-decoration: none;
        font-size: 20px;
        letter-spacing: 4px;    }
`

const Header = () => {

    // const navigate = useNavigate();

    // const logout = async () => navigate('/account');

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account'>LOGOUT</Link>
            </Container>
        </Component>
    )
}

export default Header;