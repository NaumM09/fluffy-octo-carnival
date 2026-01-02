// App Store and Play Store URLs
export const APP_STORE_URL = 'https://apps.apple.com/app/zoolo';
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.zoolo';

// Helper function for opening app store links
export const openAppStore = () => {
  window.open(APP_STORE_URL, '_blank', 'noopener,noreferrer');
};

export const openPlayStore = () => {
  window.open(PLAY_STORE_URL, '_blank', 'noopener,noreferrer');
};