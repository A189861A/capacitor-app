/**
 * native-bridge.d.ts
 *
 * 方案1: window.NativeBridge — addJavascriptInterface 注入的原生接口
 * 对应 MainActivity.java 中的 NativeBridge 内部类
 */

interface NativeBridge {
  showToast(message: string): void;
  getDeviceInfo(): string;
}

declare global {
  interface Window {
    NativeBridge?: NativeBridge;
  }
}

export function getNativeBridge(): NativeBridge | undefined {
  return window.NativeBridge;
}

export {};
