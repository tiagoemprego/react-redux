const config = {
    apiKey: process.env.VUE_APP_API_KEY,
    projectId: process.env.VUE_APP_PROJECT_ID,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,

    // OPTIONAL
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID"
};

export default config