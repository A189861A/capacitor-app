package com.example.app;

import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        /*
        * getBridge()：获取“桥接器”实例。在 Capacitor 等框架中，Bridge 是 WebView 和原生系统之间的通信枢纽，
                      它管理着所有的插件、生命周期和消息传递。
        *
        * getWebView()：获取当前应用的原生 WebView 实例（在 Android 中通常是 android.webkit.WebView）。
                       WebView 是用来加载和渲染 HTML/JS 的容器。
        *
        * addJavascriptInterface(Object obj, String name)：将一个 Java 对象注册到 WebView 中，
                       使其可以在 JavaScript 中通过指定的名称访问。
        *
        *
        * */
        // 必须在 onCreate 中注入（而非 onStart），因为 Capacitor 在 onCreate 时已加载 WebView
        getBridge().getWebView().addJavascriptInterface(new NativeBridge(), "NativeBridge");

        // 启用 WebView 远程调试（Chrome DevTools: chrome://inspect）
        android.webkit.WebView.setWebContentsDebuggingEnabled(true);
    }

    /**
     * 供 JS 端调用的原生方法
     */
    class NativeBridge {
        /*
        * @JavascriptInterface 是一个注解，它的核心作用是：声明允许被 JavaScript 代码调用的 Java/Kotlin 方法。
        * */
        @JavascriptInterface
        public void showToast(String message) {
            runOnUiThread(() ->
                Toast.makeText(MainActivity.this, message, Toast.LENGTH_SHORT).show()
            );
        }

        @JavascriptInterface
        public String getDeviceInfo() {
            return "Android SDK " + android.os.Build.VERSION.SDK_INT;
        }
    }
}
