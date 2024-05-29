const express = require('express');
const bodyParser = require('body-parser');
const sembakoRoutes = require('./routes/sembakoRoutes');
const sequelize = require('./config/database');

const app = express();

app.use(bodyParser.json());
app.use('/api', sembakoRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    console.log('Database & tables created!');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
