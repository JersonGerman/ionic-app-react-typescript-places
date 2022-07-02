import { createSlice } from "@reduxjs/toolkit";
import dataPlaces from "../../data/placesData.json";
import { Place } from "../../models/place/place.model";

const initialState = {
    listPlaces:dataPlaces,
    detailPlace:{}
}

export const placeSlice = createSlice({
    name:"place",
    // initialState: null,
    initialState,
    reducers:{
        getAllPlaces: (state:any)=>{
            return state.listPlaces
        },
        addNewPlace: (state:any, action)=>{
            const {imageURL, title} = action.payload;
            const newPlace = {
                id: `${state.listPlaces.length + 1}`,
                title,
                imageURL,
                comments:[]
            }
            state.listaPlaces = state.listPlaces.push(newPlace)

        },
        getPlaceById: (state:any, action:any)=>{
            let placeValue = state.listPlaces.find((a:Place)=>a.id == action.payload);
            return{
                ...state,
                detailPlace:placeValue
            }
        },
        deletePlaceById: (state,action)=>{
            let newPlaces = state.listPlaces.filter((a:Place)=>a.id !== action.payload)
            return{...state, listPlaces:newPlaces}
        }


    }
})

export const {getAllPlaces, getPlaceById, deletePlaceById,addNewPlace} = placeSlice.actions;
export default placeSlice.reducer;