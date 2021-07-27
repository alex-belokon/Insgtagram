
const { MongoClient } = require("mongodb");


const client = new MongoClient("mongodb+srv://instagram1:instagram1@cluster0.dew7w.mongodb.net/test")


console.log("client", client);
const start = async () => {
    console.log("Начало");
    try {
        console.log("Начало соединения");
        await client.connect()
        console.log(client);
        console.log("Соединение установлено");
       
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertOne({name:"vasiliy", age:21})
        const user = await users.findOne({name: "vasiliy", age:25})
        console.log(user);
}catch (e) {
    console.log("Ошибка", e);
}
}
start()