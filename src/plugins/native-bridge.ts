import { registerPlugin } from '@capacitor/core';

/**
 * NativeBridge 插件类型定义
 * 对应 Android 端 NativeBridgePlugin.java
 */
export interface NativeBridgePlugin {
  showToast(options: { message: string }): Promise<void>;
  getDeviceInfo(): Promise<{
    sdkVersion: string;
    brand: string;
    model: string;
  }>;
}

/*
工作原理：
TS 端                                           Android 端
─────                                           ────────
registerPlugin<NativeBridgePlugin>('NativeBridge')
      │                                              │
      │  插件名称 "NativeBridge" 匹配 ─────────────→  @CapacitorPlugin(name = "NativeBridge")
      │                                              │
      ▼                                              ▼
NativeBridge.showToast({ message })  ──Bridge──→  @PluginMethod showToast(PluginCall)
      │                                              │
      │◀──────────── Promise resolve ────────────────┘
      ▼
await → void


*registerPlugin 返回的对象是一个代理（Proxy）。当你调用 NativeBridge.showToast(...) 时，它实际做的是：
    把方法名 showToast 和参数打包成消息
    通过 Capacitor Bridge 发给原生层
    原生层找到 @PluginMethod showToast，执行，返回结果
    Promise resolve
**/ 
const NativeBridge = registerPlugin<NativeBridgePlugin>('NativeBridge'); /// 'NativeBridge'必须与 Java 端一致

export default NativeBridge;
