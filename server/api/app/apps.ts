const APPS: {
  id: string;
  android?: {
    package_name: string;
  };
  ios?: {
    bundle_id: string;
  };
}[] = [
  {
    id: "chrome",
    android: {
      package_name: "com.android.chrome",
    },
    ios: {
      bundle_id: "com.google.chrome.ios",
    },
  },
  {
    id: "firefox",
    android: {
      package_name: "org.mozilla.firefox",
    },
    ios: {
      bundle_id: "org.mozilla.ios.Firefox",
    },
  },
];

export { APPS };
