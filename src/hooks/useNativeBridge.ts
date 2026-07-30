import NativeBridge from '../plugins/native-bridge';

/**
 * React hook — Capacitor 插件封装（方案3）
 * 浏览器环境下自动降级
 */
export function useNativeBridge() {
  const toast = async (message: string) => {
    try {
      await NativeBridge.showToast({ message });
    } catch {
      console.log('[Toast fallback]', message);
    }
  };

  const getDeviceInfo = async () => {
    try {
      return await NativeBridge.getDeviceInfo();
    } catch {
      return { sdkVersion: 'Web', brand: 'N/A', model: 'Browser' };
    }
  };

  return { toast, getDeviceInfo };
}
