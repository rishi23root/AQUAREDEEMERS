const router = require("express").Router();
const { errorHandler, ErrorConstructor } = require('../middleware/errorHandler')
const { TokenHandler } = require('../middleware/tokenHandler');

// user uui is unique

// database field
// heading-topic
// sumary
// date 
// room
// by
// viewed by
// isConfirmed


// login handler
router.use(TokenHandler)

// router.get('/', (req, res, next) => {
//     // res.send("this is the way")
//     next(new ErrorConstructor("This is the way error"))
//     // next()
// })


// common request for the user and admin 
router.post('/newLogin', (req, res) => {
    // wellcome of a new user by creating cookies for that user 
    res.status(200)
    res.send('user Veryfied.')
})

router.post('/newEventRequest', (req, res) => {
    // handle request for the new request from the user
    // includes authentication of the data , dates and includs the form data in body 
    // save the data of the user in the server   
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.send('hi this is rishi')
})


router.get('/confirmTheEvent', (req, res) => {
    res.status(200)
    // res.render('mess.html')
    // res.sendFile('mess.html')
    res.sendFile(path.join(__dirname, 'views//mess.html'))
})

router.route('/testing')
    .get()
    .post()
// for the repoducing so the token when user activate the login


// faculty routes only
// 1. confirmeby take username and update it in the database



// FINAl error handle 
router.get('/*', (req, res, next) => {
    // error pages
    next(new ErrorConstructor('Not a valid request !! 😟', 404))
})

router.use(errorHandler);

module.exports = router;