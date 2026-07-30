package com.example.app;

import androidx.annotation.NonNull;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import android.widget.Toast;
/*
 * 将一个普通的 Java/Kotlin 类声明并注册为 Capacitor 的原生插件，
 * 并为其指定一个在 JavaScript 前端调用的唯一名称。
 * */
@CapacitorPlugin(name = "NativeBridge")
public class NativeBridgePlugin extends Plugin {

    /**
     * 弹出原生 Toast
     * JS 调用: NativeBridge.showToast({ message: 'Hello' })
     */
    @PluginMethod
    public void showToast(@NonNull PluginCall call) {
        String message = call.getString("message", "Default toast");
        getActivity().runOnUiThread(() ->
            Toast.makeText(getActivity(), message, Toast.LENGTH_SHORT).show()
        );
        call.resolve();
    }

    /**
     * 获取设备信息
     * JS 调用: const info = await NativeBridge.getDeviceInfo()
     */
    @PluginMethod
    public void getDeviceInfo(@NonNull PluginCall call) {
        JSObject result = new JSObject();
        result.put("sdkVersion", "Android SDK " + android.os.Build.VERSION.SDK_INT);
        result.put("brand", android.os.Build.BRAND);
        result.put("model", android.os.Build.MODEL);
        call.resolve(result);
    }
}
