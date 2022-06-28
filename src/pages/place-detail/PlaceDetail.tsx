import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonList, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Place } from '../../models/place/place.model';
import { PlacesService } from '../../services/places/places.service';

const PlaceDetail : React.FC = () =>{

    const [place, setPlace] = useState<any>({});
    const objPlaceService = new PlacesService();
    const { id } = useParams<{id:string}>();

    useEffect(()=>{
        setPlace(objPlaceService.getPlace(id));
    },[])

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='home'></IonBackButton>
                    </IonButtons>
                    <IonTitle>{place.title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className='ion-no-padding'>
                    <IonRow>
                        <IonCol>
                            <IonImg src={place.imageURL}></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h1 className='ion-text-center'>{place.title}</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                {place.comments?.map((comment:string[], index:any)=>
                                    <IonItem key={index}>{comment}</IonItem>
                                )}
                            </IonList>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default PlaceDetail;
