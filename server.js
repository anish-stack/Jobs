const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT ;
const app = express();
const ConnectDb = require('./database/Db')
const Routes = require('./routes/Jobroutes')
// Enable CORS for all routes
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended :true}))

ConnectDb()
// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, this is your Express server with CORS enabled!');
});
app.use('/api/v1',Routes)
// Start the server

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
