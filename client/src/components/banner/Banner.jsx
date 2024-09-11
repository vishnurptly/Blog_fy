
import { styled, Box, Typography } from '@mui/material';


const Image = styled(Box)`
    width: 100%;
    background: linear-gradient(90deg, rgba(21,7,24,1) 0%, rgba(41,43,60,1) 50%, rgba(23,108,125,1) 100%);
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 30px;
    color: #74f1df;
`;

const Banner = () => {

    return (
        <Image>
            <Heading>MY BLOGS</Heading>
            <SubHeading>Exploring Ideas, One Post at a Time</SubHeading>
        </Image>
    )
}

export default Banner;