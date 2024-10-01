import mongoose, { mongo } from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect('mongodb+srv://admin:admin@cluster0.m8gkg.mongodb.net/TCC?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection;
}