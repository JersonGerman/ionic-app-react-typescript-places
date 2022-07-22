import {
  IonAvatar,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { add,globe } from "ionicons/icons";
import { useSelector } from "react-redux";

const Places: React.FC = () => {
  const { listPlaces } = useSelector((state: any) => state.place);
  useIonViewWillEnter(() => {
    // petición al api para obtener lista de places
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>PLACES</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">
                <IonIcon icon={globe} ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {listPlaces.map((place: any) => (
            <IonItem key={place.id} routerLink={`/places/${place.id}`}>
              <IonAvatar slot="start">
                <IonImg src={place.imageURL} />
              </IonAvatar>
              <IonLabel>{place.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="danger" routerLink="/newPlace">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};
export default Places;
