const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config({ path: './backend/.env' });

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', dataRoutes);
app.use('/api/questions', questionsRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
