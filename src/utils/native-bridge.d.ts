/**
 * native-bridge.d.ts
 *
 * 声明 Android WebView 注入的原生接口（对应 MainActivity.java 中的 NativeBridge）
 */

interface NativeBridge {
  /** 弹出原生 Toast 提示 */
  showToast(message: string): void;
  /** 获取设备信息 */
  getDeviceInfo(): string;
}

declare global {
  interface Window {
    NativeBridge?: NativeBridge;
  }
}

/**
 * 获取原生桥接实例
 * 仅在 Android WebView 环境下可用，浏览器环境下返回 undefined
 */
export function getNativeBridge(): NativeBridge | undefined {
  return window.NativeBridge;
}

export {};
