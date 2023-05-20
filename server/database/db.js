import mongoose from 'mongoose';

const DBconnection = async() => {
    const MONGODB_URI = `mongodb://user:manansaini@ac-bbx3xzp-shard-00-00.nxkwsjq.mongodb.net:27017,ac-bbx3xzp-shard-00-01.nxkwsjq.mongodb.net:27017,ac-bbx3xzp-shard-00-02.nxkwsjq.mongodb.net:27017/?ssl=true&replicaSet=atlas-i8kp30-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        
       await mongoose.connect(MONGODB_URI, {useNewUrlParser: true});
        console.log('Database connected successfully');
         
    }  catch(error) {
         console.error('Error while connecting a database', error.message);
    }
}

export default DBconnection;