import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from '@ionic/react';

const UserInfor: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab3" />
          </IonButtons>
          <IonTitle>User Infor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>User Infor</h1>
        <p>This page renders in a separate outlet — no bottom tab bar.</p>
      </IonContent>
    </IonPage>
  );
};

export default UserInfor;
