const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlPareser:true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection

//set up an event listener to fire once when the connection opens

db.once('open',()=>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})

db.on('error', (error)=>{
    console.log(`Database error\n${error}`)
})
