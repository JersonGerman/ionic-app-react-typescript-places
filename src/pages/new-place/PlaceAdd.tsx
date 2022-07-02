import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import {useDispatch} from "react-redux";
import { useState } from "react"
import {useHistory} from "react-router"
import { addNewPlace } from "../../store/slices/place.slice";

const PlaceAdd:React.FC = ()=>{

    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    const addPlace = ()=>{
        dispatch(addNewPlace({title,imageURL}))
        history.goBack();
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>
                        Add A New Place
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonInput 
                            type="text" 
                            placeholder="Write a title" 
                            onIonChange={(e:any)=>setTitle(e.detail.value)}
                            value={title}>
                        </IonInput>
                        <IonInput 
                            type="text" 
                            placeholder="https://imagewebsite.com"
                            onIonChange={(e:any)=>setImageURL(e.detail.value)}
                            value={imageURL}>
                        </IonInput>
                        <IonButton onClick={addPlace}>SAVE</IonButton>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    )
}
export default PlaceAdd;