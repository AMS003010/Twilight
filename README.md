# Twilight

Welcome to **Twilight** - a digital oasis where music and magic intertwine. Powered by the **MERN stack**, this sleek platform offers a personalized auditory journey. It’s more than just music; it’s a **cosmic concert of cool**, where technology and melody perform a nightly serenade just for you.

---

## 🚀 Features

- 🎵 **Curate Playlists** - Create personalized playlists based on music preferences.
- 🔍 **Powerful Search** - Find tracks, albums, or artists instantly.
- 🎭 **Immersive UI** - Explore a visually engaging music player.
- 📌 **User Profiles** - View favorite songs and get music recommendations.
- 🎨 **Genre & Artist Exploration** - Discover new music genres and artists interactively.

---

## 🏗️ Built With

| Technology | Description |
|------------|-------------|
| **[Node.js](https://nodejs.org/)** | JavaScript runtime for backend development |
| **[Express.js](https://expressjs.com/)** | Web framework for Node.js |
| **[MongoDB Atlas](https://www.mongodb.com/atlas/database)** | Cloud-based NoSQL database |
| **[Mongoose](https://mongoosejs.com/)** | MongoDB object modeling for Node.js |
| **[React.js](https://react.dev/)** | Frontend JavaScript library |

---

## 🛠️ Prerequisites

Before running the project, ensure you have the following installed:

1. **[Node.js](https://nodejs.org/en)** - JavaScript runtime for server-side execution.
2. **[MongoDB Atlas](https://www.mongodb.com/atlas/database)** - Cloud database to store user and music data.
3. **[Firebase](https://firebase.google.com/)** - Used for storing images and audio files.

---

## 💻 Getting Started

### 1️⃣ Clone the Repository
```sh

git clone https://github.com/AMS003010/Twilight.git
cd Twilight
npm install
```

### 2️⃣ Set Up Environment Variables
Create a **.env** file in the `backend` directory and add the following:
```sh

PORT='<your_port>'
MONGO_URI='<your_mongodb_uri>'
SECRET='<your_secret_key>'
```

### 3️⃣ Configure Firebase
Add your Firebase configuration details in `frontend/src/firebase.js`:
```js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    <your_firebase_config_details>
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
```

### 4️⃣ Run the Backend Server
```sh
cd backend
npm start
```

### 5️⃣ Run the Frontend Server
Open another terminal:
```sh
cd frontend
npm start
```

### 6️⃣ Access the App
Go to [localhost:3000](http://localhost:3000/) in your browser.

### 7️⃣ Upload Music & Playlists
Use the following components to upload songs and playlists to Firebase Storage:
- **[SongUploader.js](https://github.com/AMS003010/Twilight/blob/main/frontend/src/components/SongUploader.js)**
- **[PlaylistUploader.js](https://github.com/AMS003010/Twilight/blob/main/frontend/src/components/PlaylistUploader.js)**

---

## 📸 Project Images

| Feature | Screenshot |
|---------|-----------|
| **Home Page** | ![Home page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/home.png) |
| **Intro Page** | ![Intro page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/intro.png) |
| **Login Page** | ![Login page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/login.png) |
| **Signup Page** | ![Signup page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/signup.png) |
| **Listening Space** | ![Listening Space](https://github.com/AMS003010/Twilight/blob/main/Project%20images/listening_space.png) |
| **Music Control** | ![Music Control](https://github.com/AMS003010/Twilight/blob/main/Project%20images/music_control.png) |
| **Genres** | ![Genre page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/genre.png) |
| **Artists** | ![Artists page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/artists.png) |
| **Search Page** | ![Search page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/search.png) |
| **User Dashboard** | ![User Dashboard page](https://github.com/AMS003010/Twilight/blob/main/Project%20images/user_profile.png) |

---

## 👨‍💻 Maintainers
This project is maintained by [@AMS003010](https://github.com/AMS003010).

---

## 🤝 Contributing
We welcome contributions to **Twilight**! To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your branch and open a pull request.

---

## 📝 License
This project is licensed under the **MIT License**.

---

📩 Contact
For any queries or issues, feel free to reach out via GitHub Issues.

Happy Coding! 🚀

