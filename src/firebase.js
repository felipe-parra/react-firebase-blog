import firebase from 'firebase/app';
import database from 'firebase/database';

const config = {
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID
};

let firebaseCache;

export const getFirebase = () => {
	if (firebaseCache) {
		return firebaseCache;
	}

	firebase.initializeApp(config);
	firebaseCache = firebase;
	return firebase;
};
