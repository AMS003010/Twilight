# Twilight
Welcome to Twilight - a digital oasis where music and magic intertwine. Powered by the MERN stack, this sleek platform offers a personalized auditory journey. It's not just music; it's a cosmic concert of cool, where technology and melody perform a nightly serenade just for you.

## Features
* Users can curate their own playlists based on music preferences, creating a tailored sonic experience.
* Explore an intuitive platform where music genres and artists come to life through immersive visuals.
* Quickly find desired tracks, albums, or artists through a powerful search feature.
* Personalized user profiles display favorite songs and a snapshot of musical preferences.
* Dive into an immersive audio journey with a visually stunning and user-friendly music player.

### Prerequisites

1. **Node.js** for running server-side JavaScript. 

2. **MongoDB Atlas** to store data about user, songs, playlists

3. A **Firebase** account with firebase config details for the storage which will be used to store the images and audio files being used.

### To run this project locally
1. Install [nodejs](https://nodejs.org/en)
2. Create a [mongodb atlas](https://www.mongodb.com/atlas/database) account and get your MONGODB URI
3. Create a [Firebase](https://firebase.google.com/) account and configer for storage.
4. Clone this repository and install the required packages using npm.

```
git clone https://github.com/AMS003010/Twilight.git
cd Twilight
npm install
```

5. Create a .env file in the backend directory and add your MONGODB_URI and also a SECRET to hash your passwords.

```
PORT='<port>'
MONGO_URI='<mongobd uri>'
SECRET='<key>'
```
6. Add your firebase config details in [firebase.js](https://github.com/AMS003010/Twilight/blob/main/frontend/src/components/firebase.js)

```
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    <config details>
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
```

7. Remaining in the Twilight repository, run ```cd backend```  and ```npm start``` in the terminal with the project.  

9. Run ```cd frontend``` in another terminal and ```npm start``` in the terminal with the project.

10. Then go to [localhost:3000](http://localhost:3000/).

11. Use the [SongUploader.js](https://github.com/AMS003010/Twilight/blob/main/frontend/src/components/SongUploader.js) and the [PlaylistUploader.js](https://github.com/AMS003010/Twilight/blob/main/frontend/src/components/PlaylistUploader.js) components to upload your songs and playlists on Firebase storage.



## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - The cloud database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [React](https://react.dev/) - The library for web and native user interfaces
