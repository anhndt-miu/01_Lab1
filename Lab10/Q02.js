import express from 'express'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

function extractNumbers(req, res, next) {
    let {a, b} = req.query || req.body || {};
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Invalid numbers")
    }

    req.a = parseInt(a);
    req.b = parseInt(b);
    next();
}

app.all('/addition', extractNumbers, (req, res) => {
    res.json({result: req.a + req.b});
});

app.all('/subtraction', extractNumbers, (req, res) => {
    res.json({result: req.a - req.b});
});

app.all('/multiplication', extractNumbers, (req, res) => {
    res.json({result: req.a * req.b});
});

app.all('/division', extractNumbers, (req, res, next) => {
    if (req.b === 0) {
        throw new Error("Can not division with 0")
    } else {
        res.json({result: req.a / req.b});
    }
});

app.all('/modulus', extractNumbers, (req, res) => {
    if (req.b === 0) {
        throw new Error("Can not modulus with 0")
    } else {
        res.json({result: req.a % req.b});
    }
});

app.use(function (err, req, res, next) {
    res.status(400).json({err: err.message});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});