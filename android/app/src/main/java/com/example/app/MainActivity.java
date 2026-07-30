package com.example.app;

import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        /*
        * registerPlugin 是 BridgeActivity 提供的方法，作用是把 插件类告诉 Capacitor 的 Bridge，
            让 Bridge 在 JS 端调用时能找到对应的原生实现。

        * 核心机制
            MainActivity.java
            ─────────────────
            registerPlugin(NativeBridgePlugin.class);   ① 注册：告诉 Bridge 有这样一个插件
                │
                ▼
            super.onCreate(savedInstanceState);         ② Bridge 初始化，加载所有已注册的插件
                │
                ▼
            Bridge 内部维护一个 Map:
            { "NativeBridge" → NativeBridgePlugin 实例 }
                    ↑                        ↑
                @CapacitorPlugin(name)    实际的 Java 类

        **/
        // 方案3: 注册 Capacitor 插件
        registerPlugin(NativeBridgePlugin.class);

        super.onCreate(savedInstanceState);

        // 方案1: 通过 addJavascriptInterface 注入，JS 端通过 window.NativeBridge 直接调用
        getBridge().getWebView().addJavascriptInterface(new NativeBridge(), "NativeBridge");

        // 启用 WebView 远程调试（Chrome DevTools: chrome://inspect）
        android.webkit.WebView.setWebContentsDebuggingEnabled(true);
    }

    /**
     * 方案1: 供 JS 端 window.NativeBridge 直接调用的原生方法
     */
    class NativeBridge {

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
