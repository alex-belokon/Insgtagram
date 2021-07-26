
console.log("Код выполняется");
const { MongoClient } = require("mongodb");
const bson = require('bson');
console.log("bson", bson);



const client = new MongoClient("mongodb+srv://instagram1:instagram1@cluster0.dew7w.mongodb.net/test")


console.log("client", client);
const start = async () => {
    console.log("Начало");
    try {
        console.log("Начало соединения");
        await client.connect()
        console.log(client);
        console.log("Соединение установлено");
        const db = client.db('instagram1')
        users = db.createCollection('users')
        console.log(users);


    } catch (e) {
        console.log("Ошибка", e);
    }
}
start()