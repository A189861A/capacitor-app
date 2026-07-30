import React from "react";
import { Share } from "@capacitor/share";
import { IonButton } from "@ionic/react";

function ShareButton() {
  const share = async () => {
    await Share.share({
      title: "React App",
      text: "--Visit this React App--",
      url: "http://172.20.16.244:3001",
      dialogTitle: "Share with...",
    });
  };

  const toastFn = async () => {
    // @ts-ignore
    window.NativeBridge.showToast("Hello from JS!");
  };

  return (
    <>
      <IonButton onClick={share}>Share</IonButton>
      <IonButton onClick={toastFn}>toast</IonButton>
    </>
  );
}

export default ShareButton;
