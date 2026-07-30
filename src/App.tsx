import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import './App.css';
import ShareButton from './Components/ShareButton';

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Capacitor App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="App">
            <ShareButton />
        </div>
      </IonContent>
    </IonApp>
  );
}

export default App;
