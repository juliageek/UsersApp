// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: 'AIzaSyBPOcKVRZ4zQkiVEe_3hHP-USUFxCb5AtM',
    authDomain: 'usersapp-58c0f.firebaseapp.com',
    databaseURL: 'https://usersapp-58c0f.firebaseio.com',
    projectId: 'usersapp-58c0f',
    storageBucket: 'usersapp-58c0f.appspot.com',
    messagingSenderId: '256730173408'
  }
};
