import mongoose from 'mongoose';

export default async function conectaNaDB(){
    mongoose.connect("mongodb+srv://admin:admin@cluster0.m8gkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
}