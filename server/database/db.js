import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://0.0.0.0:27017/blogdb`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;