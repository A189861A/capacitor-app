import { getNativeBridge } from '../utils/native-bridge.d';

/**
 * React hook — 封装的 NativeBridge 调用
 */
export function useNativeBridge() {
  const toast = (message: string) => {
    const bridge = getNativeBridge();
    if (bridge) {
      bridge.showToast(message);
    } else {
      console.log('[Toast fallback]', message);
    }
  };

  const getDeviceInfo = (): string => {
    return getNativeBridge()?.getDeviceInfo() ?? 'Web Browser';
  };

  return { toast, getDeviceInfo };
}
