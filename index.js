const express = require('express');
const path = require("path")
const fs = require("fs")
const app = express();
const cors = require("cors");
const helmet = require("helmet");
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')

const { errorHandler, ErrorConstructor } = require('./middleware/errorHandler')
require('dotenv').config();
//database connection
require('./database/init');

const port = process.env.PORT || 3001;

app.use(cors({
    origin: '*',
    credentials: true,

}));
// ############ middlewares ################

// for prduction and access
// if (process.env.NODE_ENV != 'development')
//     app.use(helmet.contentSecurityPolicy()); // uncomment in final version
// app.use(helmet.crossOriginEmbedderPolicy());
// app.use(helmet.crossOriginOpenerPolicy());
// app.use(helmet.crossOriginResourcePolicy());
// app.use(helmet.dnsPrefetchControl());
// app.use(helmet.expectCt());
// app.use(helmet.frameguard());
// app.use(helmet.hidePoweredBy());
// app.use(helmet.hsts());
// app.use(helmet.ieNoOpen());
// app.use(helmet.noSniff());
// app.use(helmet.originAgentCluster());
// app.use(helmet.permittedCrossDomainPolicies());
// app.use(helmet.referrerPolicy());
// app.use(helmet.xssFilter());

app.use(express.json())
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// set it up for production and development sepereately
// if (process.env.NODE_ENV == 'development'){
//     app.use(cors());
// } else{
//     // production
//     // check if all subdomains are allowed or not
//     app.use(cors({
//         origin: '*.' + process.env.siteURL
//     }));
// }

// ############ ############ ################




// just for testing 
if (process.env.NODE_ENV == 'development') {
    app.use((req, res, next) => {
        console.log("url - ", req.url, "\tIp -", req.ip)
        next()
    });
}

app.use("/api/", require("./api/api"));




// if in the production 
if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    app.get("/*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
} else {
    app.get("/*", (req, res) => {
        res.send(
            "server in developer mode run react on seperately"
        )
    })
}

app.listen(port, () => {
    console.log(`server is listening on http://localhost:${port}`)
})