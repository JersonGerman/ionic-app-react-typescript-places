import { IonBackButton, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonList, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonAlert, useIonViewWillEnter } from '@ionic/react';
import {trash} from 'ionicons/icons'
import { useParams, useHistory} from 'react-router';
import { useDispatch, useSelector} from 'react-redux';
import { deletePlaceById, getPlaceById } from '../../store/slices/place.slice';

const PlaceDetail : React.FC = () =>{
    const { id } = useParams<{id:string}>();
    const dispatch = useDispatch();
    const history = useHistory();
    const [presentAlert] = useIonAlert();

    const {detailPlace} = useSelector((state:any) => state.place)

    useIonViewWillEnter(()=>{
        dispatch(getPlaceById(id))
    })

    const deletePlace = () =>{
        presentAlert({
            header:'Are you sure, you want to delete it?',
            subHeader:'Be careful',
            buttons:[
                {
                    text:'Cancel',
                    role:'cancel'
                },
                {
                    text:'Delete',
                    role:'ok',
                    handler:()=>{
                        dispatch(deletePlaceById(id))
                        history.replace("/places")
                    }
                }
            ]
        })
    }

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar color='secondary'>
                    <IonButtons slot='start'>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>{detailPlace.title}</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton onClick={deletePlace}>
                            <IonIcon src={trash}></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonGrid className='ion-no-padding'>
                    <IonRow>
                        <IonCol>
                            <IonImg src={detailPlace.imageURL}></IonImg>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <h1 className='ion-text-center'>{detailPlace.title}</h1>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            {detailPlace.comments && detailPlace.comments.length>0 ?
                            <IonList>
                                {detailPlace.comments?.map((comment:string[], index:any)=>
                                    <IonItem key={index}>{comment}</IonItem>
                                )}
                            </IonList>
                            :
                            <IonText className='ion-text-center'>
                                <p>No comments yet.</p>
                            </IonText>
                            }

                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default PlaceDetail;
