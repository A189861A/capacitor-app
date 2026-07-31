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
     * 
     * @param call 插件调用对象
     * getActivity() 是 com.getcapacitor.Plugin 基类提供的方法，
                    返回插件当前依附的 Android Activity（即 MainActivity 实例）。
     * 常用 call 方法
        方法	                                作用	                      示例
        call.getString(key, default)	    读字符串参数	         call.getString("msg", "")
        call.getInt(key, default)	        读整数参数	             call.getInt("count", 0)
        call.getBoolean(key, default)	    读布尔参数	             call.getBoolean("force", false)
        call.getObject(key)             	读对象参数	             call.getObject("config")
        call.resolve()	                    通知成功	             call.resolve()
        call.resolve(data)              	成功 + 返回数据	         call.resolve(new JSObject())
        call.reject(msg)	                通知失败	             call.reject("Network error")

     * 
        @Nullable — 允许为 null
        @NonNull — 不允许为 null
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
