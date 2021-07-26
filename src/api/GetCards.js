

console.log("Код выполняется");
const { MongoClient } = require("mongodb");
const bson = require('bson');
console.log("bson", bson);



const client = new MongoClient("mongodb+srv://simon:00000000@cluster0.lmmxk.mongodb.net/instagram?retryWrites=true&w=majority")


console.log("client", client);
const start = async () => {
    console.log("Начало");
    try {
        console.log("Начало соединения");
        await client.connect()
        console.log("Соединение установлено");
    } catch (e) {
        console.log("Ошибка", e);
    }
}
start()


