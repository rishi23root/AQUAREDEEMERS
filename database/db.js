const mongoose = require("mongoose");
require('dotenv').config()

const DBname = {
    user: 'User',
    test: 'testingSample',
}

// defining the schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    username: {
        type: String,
    },
    useremail: {
        type: String,
        validate: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'email can not varify, try something'
        ],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    testRequestArray: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: DBname.test
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

        
const testSchema = mongoose.Schema({
    // ftir
    _id: mongoose.Schema.ObjectId,
    description: {
        type: String,
        required: true
    },
    testDate: {
        type: Date,
        required: true
    },
    sampleVenue: {
        type: String,
        required: true
    },

    resultStatus: {type: String},
    resultBool: {type: String},
    resultDate: {type: Date},
    resultDescription: {type: String},

}, { timestamps: true })



// connect to the database
const connectionParams = {
    useNewUrlParser: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

mongoose.connect(process.env.DB, connectionParams)
    .then(_ => {
        console.log("Connected to database successfully 😎");
    })
    .catch(err => {
        console.log("Could not connect to database! 😑");
        console.error(err);
    })


    
mongoose.model(DBname.user, userSchema)
mongoose.model(DBname.test, testSchema)


