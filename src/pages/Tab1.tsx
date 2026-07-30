import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ShareButton from '../Components/ShareButton';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>Welcome to Capacitor App</h1>
        <p>This is the Home tab.</p>
        <ShareButton />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
