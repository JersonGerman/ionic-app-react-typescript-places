import { IonButton, IonInput, IonItem } from '@ionic/react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,setSpecificValue } from '../store/slices/counter.slice';

import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state:any) => state.counter);

  const incrementCounter = () =>{
    dispatch(increment())
  }
  const decrementCounter = ()=>{
    dispatch(decrement())
  }

  const setCounter = (valor:String|null|Number|undefined) => {
    dispatch(setSpecificValue(valor))
  }

  return (
    <div className="container">
      <IonItem>
        <IonInput type='number' onIonChange={e=>setCounter(e.detail.value)}></IonInput>
      </IonItem>
      <h1>My First App</h1>
      <p>{counter}</p>
      <IonButton onClick={incrementCounter}>Increment</IonButton>
      <IonButton onClick={decrementCounter}>Decrement</IonButton>
    </div>
  );
};

export default ExploreContainer;
