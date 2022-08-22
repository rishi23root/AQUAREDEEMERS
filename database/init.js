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
            'email can not verify, try something else'
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


const sampleVenueSchema = mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    latitute: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
})

const testSchema = mongoose.Schema({
    // ftir
    _id: mongoose.Schema.ObjectId,
    testNameStr: {
        type: String,
        required: true,
    },
    testDate: {
        type: Date,
        required: true
    },
    sampleVenue: [sampleVenueSchema],

    reservoirType: {
        type: String,
        required: true
    },

    reservoirAvgCapacity: {
        type: Number,
        required: true
    }, // default in L

    // outputs from the program
    resultStatus: {type: String},
    resultBool: {type: String},
    resultDate: {type: Date},
    resultDescription: {type: String},

}, { timestamps: true })

// flteration processes


// connect to the database
const connectionParams = {
    useNewUrlParser: true,
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
};

const ConnectionURI = `mongodb+srv://${process.env.DBURIANDPASS}@rishabhdatabase-7ayur.mongodb.net/${process.env.DBName}?authSource=admin&replicaSet=rishabhDatabase-shard-0&w=maj&readPreference=primary&retryWrites=true&ssl=true`
// `mongodb+srv://${process.env.DBURIANDPASS}-7ayur.mongodb.net/socialHACK?retryWrites=true&w=majority`

mongoose.connect(ConnectionURI, connectionParams)
    .then(_ => {
        console.log("Connected to database successfully 😎");
    })
    .catch(err => {
        console.log("Could not connect to database! 😑");
        console.error(err);
    })

    
    
mongoose.model(DBname.user, userSchema)
mongoose.model(DBname.test, testSchema)


