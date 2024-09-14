const cors       = require('cors');
const express    = require('express');
const mongoose   = require('mongoose');
const apiRoutes  = require('./routes');

const app    = express();


mongoose.connect('mongodb+srv://profesornodejs:V7pwiMot8Xjl6Te9@cluster0.60gmm.mongodb.net/?retryWrites=true&w=majority&appName=cluster0', 
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});



app.use(cors());    
app.use(express.json());
app.use('/api', apiRoutes);


app.listen(8090, () => console.log("Servidor iniciado..."))