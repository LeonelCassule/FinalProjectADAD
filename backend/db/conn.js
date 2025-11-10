const mongoose = require("mongoose");

async function main() {

    try{

        await mongoose.connect(
            'mongodb+srv://leonelcassule1994_db_user:O5PiSS7hFT4XFtZl@cluster0.kzgyrpn.mongodb.net/ProjectoFinal?appName=Cluster0');
        console.log("MongoDB conectado!")
        
    } catch(error) {
        console.log(`Erro: ${error}`);
    }
    
}
       

module.exports = main;