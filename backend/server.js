require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connection = require('./db');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const authRoutes = require('./routes/authRoute');
const songRoutes = require('./routes/songRoute');
const playlistRoutes = require('./routes/playlistRoute');
const searchRoutes =  require('./routes/searchRoutes');

connection();

app.use(express.json());
app.use((req,res,next) => {
    console.log(req.path,req.method)
    next()
})
app.use(cors(
    {
        origin: ["https://twilight.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));     //app.use(cors());

app.use('/api/user',userRoutes);
app.use('/api/login',authRoutes);
app.use('/api/song',songRoutes);
app.use('/api/playlist',playlistRoutes);
app.use('/api/search',searchRoutes);

app.listen(process.env.PORT,() => {
    console.log("Connected and listening on Port ",process.env.PORT);
})
