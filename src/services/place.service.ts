import { IPlace } from "../interfaces/IPlace";
import { Place } from "../models/Place.model";

export async function getPlaces(name?: string) {
    const query = name ? {name: name} : {}
    const places = await Place.find(query)
    return places.map(place => {
        return place.toJSON()
    })
}

export async function getPlaceById(id: string) {
    const place = await Place.findById(id)
    return place?.save()
}

export async function createPlace(placeData:IPlace) {
    const place = new Place(placeData)   
    return place.save() 
}