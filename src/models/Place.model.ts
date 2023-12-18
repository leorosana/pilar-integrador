import mongoose from "mongoose";
import { IPlace } from "../interfaces/IPlace";

const addresSchema = new mongoose.Schema({
    lat: Number,
    long: Number,
    map: String,
  });

const placeSchema = new mongoose.Schema<IPlace>({
    name: String,
    address: addresSchema, // Subesquema 
    description: String,
    days_hours_open: String,
    picture: String,
} )

/* name:{
  type: String,
  required: true,
},*/

// modelo basado en el esquema
export const Place = mongoose.model('Place', placeSchema)
