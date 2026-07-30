import React from "react";
import { Share } from "@capacitor/share";
import { IonButton } from "@ionic/react";
import NativeBridge from "../plugins/native-bridge";

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
    /*
    Android 端在 WebView 中执行了这行代码：

    getBridge().getWebView().addJavascriptInterface(new NativeBridge(), "NativeBridge");
    //                                                    实例              JS 中的名字
    * 原理
    addJavascriptInterface 是 Android WebView 的原生 API，它做的事情很简单：

    Java 对象                              JS 全局作用域
    ─────────                              ────────────
    new NativeBridge()         注入到       window.NativeBridge
        │                         →              │
        ├ showToast(message)                     ├ showToast(message)   // 可直接调用
        └ getDeviceInfo()                        └ getDeviceInfo()
    new NativeBridge() — 创建 Java 内部类的实例
    "NativeBridge" — 指定它在 JS 全局作用域中的名字
    注入后，WebView 内的 JS 代码可以直接 window.NativeBridge.showToast("Hi")
    *
    **/
    // @ts-ignore
    window.NativeBridge.showToast("Hello from JS!");
  };

  const toastPluginFn = async () => {
    await NativeBridge.showToast({ message: "Hello from Plugin!" });
  };

  return (
    <>
      <IonButton onClick={share}>Share</IonButton>
      <IonButton onClick={toastFn}>toast</IonButton>
      <IonButton onClick={toastPluginFn}>toast-plugin</IonButton>
    </>
  );
}

export default ShareButton;
