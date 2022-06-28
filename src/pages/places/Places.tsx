import { IonAvatar, IonContent, IonHeader, IonImg, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { PlacesService } from '../../services/places/places.service';

const Places : React.FC = () =>{

    const objPlaceService = new PlacesService;
    const places = objPlaceService.getPlaces();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                <IonTitle>PLACES</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Blank</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonList>
                    {places.map(place => 
                        <IonItem key={place.id} routerLink={`/places/${place.id}`}>
                            <IonAvatar slot='start'>
                                <IonImg src={place.imageURL} />
                            </IonAvatar>
                            <IonLabel>
                                {place.title}
                            </IonLabel>
                        </IonItem>
                    )}
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default Places;