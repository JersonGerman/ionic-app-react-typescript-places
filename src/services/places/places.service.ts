import { Place } from "../../models/place/place.model"

export class PlacesService {

    private places: Place[] = [
        {
            id:"1",
            title: "Eiffel Tower",
            imageURL: "https://www.planetware.com/photos-large/F/eiffel-tower.jpg",
            comments: ["Awesome place","Wonderul experience"]
        },
        {
            id:"2",
            title: "Statue of Liberty",
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/741px-Statue_of_Liberty_7.jpg",
            comments: ["Awesome place","Wonderul experience"]
        },
        {
            id:"3",
            title: "Machu Picchu",
            imageURL: "https://destinoperu.net/wp-content/uploads/2020/07/MACHU-PICCHU.jpeg",
            comments: ["Awesome place","Wonderul experience"]
        }
    ]

    getPlaces(){
        return[...this.places]
    }

    getPlace(placeId: string){
        return {
            ...this.places.find(place=>{
                return place.id === placeId
            })
        }
    }

    addPlace(title:string, imageURL:string){
        this.places.push({
            title,
            imageURL,
            comments:[],
            id: this.places.length +1+""
        })
    }

    deletePlace(placeId:string){
        this.places.filter(place => {
            return place.id !== placeId
        })
    }
}