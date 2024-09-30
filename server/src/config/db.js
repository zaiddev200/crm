import mongoose from 'mongoose';

const connectDb = async () =>{
    try {
        mongoose.connect(`${process.env.DB_URL}crm`)
        console.log("DB connection established");
        
    } catch (error) {
        console.log("Error connecting");
        
    }

}
export default connectDb;