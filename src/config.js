// ==============================|| THEME CONFIG  ||============================== //

const config = {
  defaultPath: "/dashboard/default",
  fontFamily: `'Public Sans', sans-serif`,
  i18n: "en",
  miniDrawer: false,
  container: true,
  mode: "light",
  presetColor: "default",
  themeDirection: "ltr",
};

export default config;
export const drawerWidth = 260;

export const twitterColor = "#1DA1F2";
export const facebookColor = "#3b5998";
export const linkedInColor = "#0e76a8";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
  //   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

export function getFirebaseConfig() {
  if (!firebaseConfig || !firebaseConfig.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return firebaseConfig;
  }
}
