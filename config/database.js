const db = require('mongoose');
const URI = process.env.DB_URL || 'mongodb://localhost/shopping-admin';

const getConnection = async()=>{
    try {
        let connectionStatus = await db.connect(URI,{
            useNewUrlParser: true,
            useUnifiedTopology:true  
         });
         console.log('🎉 Successfully Connected to the database');   
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = {
    getConnection
}