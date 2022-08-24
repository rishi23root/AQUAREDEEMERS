const mongoose = require("mongoose");
const DBname = require('../database/init');
console.log(DBname)


const Users = mongoose.model(DBname.user);
const Test = mongoose.model(DBname.test);
const Filters = mongoose.model(DBname.filters);

// new signup
function signup(username, userEmail, password, testRequest = NaN, isAdmin = false, isVerified = false, isBlocked = false) {
    return new Promise((resolve, reject) => {
        // check if user already exists
        Users.findOne({ userEmail })
            .then(user => {
                if (user) {
                    reject("user already exists")
                } else {
                    // create new user
                    const newUser = new Users({
                        username,
                        password,
                        testRequest,
                        isAdmin,
                        isVerified,
                        isBlocked
                    })
                    user.save((err, user) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(user)
                        }
                    })

                }
            })

    })
}

// new login
function login(userEmail, password) {
    return new Promise((resolve, reject) => {
        Users.findOne({ userEmail })
            .then(user => {
                if (!user) {
                    reject("User not found")
                } else {
                    if (user.password === password) {
                        resolve({ user })
                    } else {
                        reject("password not correct")
                    }
                }
            })
    })
}


// work on user 
function getUserAllData(userId) {
    return new Promise((resolve, reject) => {
        Users.findById(userId)
            .then(user => {
                if (!user) {
                    reject("User not found")
                } else {
                    resolve(user)
                }
            })
    })
}

function addTestRequest(userId, testRequest) {
    return new Promise((resolve, reject) => {
        Users.findById(userId)
            .then(user => {
                if (!user) {
                    reject("User not found")
                } else {
                    user.testRequestArray.push(testRequest)
                    user.save((err, user) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(user)
                        }
                    })
                }
            })
    })
}

function getRecentRequests() {
    return new Promise((resolve, reject) => {
        Test.find({})
            .then(tests => {
                if (!tests) {
                    reject("No tests found")
                } else {
                    resolve(tests)
                }
            })
    })
}


// fileter compairing from the database
function getAllFilters() {
    return new Promise((resolve, reject) => {
        Filters.findById(userId)
            .then(user => {
                if (!user) {
                    reject("User not found")
                } else {
                    resolve(user)
                }
            })
    })

}


module.exports = {
    signup,
    login,
    getUserAllData,
    addTestRequest,
    getRecentRequests

}