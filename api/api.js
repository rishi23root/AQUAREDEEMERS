const router = require("express").Router();
const { errorHandler, ErrorConstructor } = require('../middleware/errorHandler')
const { TokenHandler } = require('../middleware/tokenHandler');
const { signup, login } = require('../database/utils');
const { ftirDatasetforCompairing, mappingData, compairvaluePoints } = require('../util/indexing')
// const { compairvaluePoints } = require('../util/utils')

// console.log(ftirDatasetforCompairing)
// router.use(TokenHandler)


// common request for the user and admin 
router.post('/newLogin', (req, res) => {
    console.log(req.body)

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

router.post('/newRegister', (req, res) => {
    const { email, password, username } = req.body
    console.log(req.body)

    if (!email || !password) {
        return res.status(400)
            .send({
                message: 'Credentials can not be empty, stop playing around 😐'
            })
    }
    signup(username, email, password)
        .then(user => {
            res.status(200).send({
                message: 'Register Successful',
                user
            })
        }).catch(err => {
            console.log(err)
            res.status(400).send({
                message: 'Register Failed',
                err
            })
        }
        )
})

router.post('/newTest', (req, res) => {
    const { type, field1, field2 } = req.body;
    const arrfield1 = JSON.parse(field1)
    const arrfield2 = JSON.parse(field2)
    // JSON.parse(str)
    compairvaluePoints(arrfield1, arrfield2)
        .then(valuePoints => {
            // console.log(valuePoints)
            res.status(200)
                .json({
                    message: 'Test Successful',
                    type,
                    valuePoints,
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    message: 'Test Failed not found'
                })
        })
})

router.get('/observation', (req, res) => {
    res
    .status(200)
    .json({

    })
})


// FINAl error handle 
router.get('/*', (req, res, next) => {
    // error pages
    next(new ErrorConstructor('Not a valid request !! 😟', 404))
})

router.use(errorHandler);

module.exports = router;