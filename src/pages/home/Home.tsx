import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonImg,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState } from "react";
import { getPhotos } from "../../services/photos/photos.service";
import "./Home.css";

const Home: React.FC = () => {

  const [photos, setPhotos] = useState([]);

  useIonViewWillEnter(()=>{
    getPhotos().then(res=>setPhotos(res))
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {photos.map((photo:any)=>(
            <IonCard key={photo.id}>
              <IonImg src={photo.thumbnailUrl}  />
              <IonCardContent>
                <p>{photo.title}</p>
                <p><a href={photo.url} target="_blank">{photo.url}</a></p>
              </IonCardContent>
            </IonCard>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
