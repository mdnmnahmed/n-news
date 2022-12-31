import mongoose from "mongoose";

//Global Variable to store DB Connection
global.mongoose = {
    conn: null,
    promise: null
}

export async function dbConnect() {
    if (global.mongoose?.conn) {
        console.log('Exiting connection');
        return global.mongoose.conn;
    } else {
        console.log('New connection');
        const promise = mongoose.connect(process.env.MONGO_URI, {
            useNewURLParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        }).then(mongoose => mongoose);

        global.mongoose = {
            conn: await promise,
            promise
        }

        return await promise;
    }
}