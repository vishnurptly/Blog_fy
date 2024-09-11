import { Box, styled, Typography } from '@mui/material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #ffffff;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper sx={{ background: "#1a4964", color: "#ffffff" }}>
                <Typography variant="h3">Blogify</Typography>
                <Text variant="h5">
                    Welcome to Blogify blog website, a place where ideas come to life and stories are shared. Our mission is to create a platform where you can explore a wide range of topics, from tech trends to lifestyle tips, and everything in between. Whether you're here to learn, be inspired, or simply enjoy some downtime, we've got something for everyone.

                    Our team of passionate writers and enthusiasts is dedicated to delivering content that is not only informative but also engaging and thought-provoking. We believe in the power of words to connect people, spark conversations, and drive change. That's why we're committed to bringing you fresh perspectives and original insights.

                    At Blogify, we value our readers' opinions and encourage you to join the conversation. Feel free to comment, share your thoughts, and connect with us on social media. We're here to build a community where everyone feels welcome and heard.

                    Thank you for being a part of our journey. We hope you enjoy your time here and find something that resonates with you.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;