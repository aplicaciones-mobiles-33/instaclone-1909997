// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCajRb_5bRbtdB5cQvPD6m2JRrI-ivUlZQ",
    authDomain: "instaclone-app-fc3ab.firebaseapp.com",
    projectId: "instaclone-app-fc3ab",
    storageBucket: "instaclone-app-fc3ab.appspot.com",
    messagingSenderId: "536989865982",
    appId: "1:536989865982:web:02c58b2b299d8f790192af"
  }
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
