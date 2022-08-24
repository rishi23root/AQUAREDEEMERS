const router = require("express").Router();
const { errorHandler, ErrorConstructor } = require('../middleware/errorHandler')
const { TokenHandler } = require('../middleware/tokenHandler');
const { signup, login } = require('../database/utils');

// require('../database/utils');
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


// common request for the user and admin 
router.post('/newLogin', (req, res) => {
    // console.log(req.body)
    if (!req.body.email || !req.body.password) {
        return res.status(400)
            .send({
                message: 'Credentials can not be empty, stop playing around 😐'
            })
    }
    login(req.body.email, req.body.password)
        .then(user => {
            res.status(200).send({
                message: 'Login Successful',
                user
            })
        }).catch(err => {
            res.status(400).send({
                message: 'Login Failed',
                err
            })
        }
        )
}
)

// wellcome of a new user by creating cookies for that user 
// res.status(200)
// res.send('user Veryfied.')
// // })

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




// FINAl error handle 
router.get('/*', (req, res, next) => {
    // error pages
    next(new ErrorConstructor('Not a valid request !! 😟', 404))
})

router.use(errorHandler);

module.exports = router;