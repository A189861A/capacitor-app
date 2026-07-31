import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useIonRouter } from '@ionic/react';

const Tab3: React.FC = () => {
  const router = useIonRouter();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton onClick={() => router.push('/tab3/detail')}>
          Open Detail
        </IonButton>
        <IonButton onClick={() => router.push('/user-indor')}>
          Open UserIndor
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
