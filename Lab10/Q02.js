import express from 'express'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

function handleOperation(req, res, operation) {
    const num1 = parseInt(req.query.a || req.params.a || req.body.a);
    const num2 = parseInt(req.query.b || req.params.b || req.body.b);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({err: "Invalid or missing numbers"});
    }

    let result;
    switch (operation) {
        case 'addition':
            result = num1 + num2;
            break;
        case 'subtraction':
            result = num1 - num2;
            break;
        case 'multiplication':
            result = num1 * num2;
            break;
        case 'division':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        case 'modulus':
            result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
            break;
        default:
            return res.status(400).json({error: 'Invalid operation'});
    }

    res.json({result: result});
}

['addition', 'subtraction', 'multiplication', 'division', 'modulus'].forEach((operation) => {
    app.get(`/${operation}/:a?/:b?`, (req, res) => handleOperation(req, res, `${operation}`))
    app.post(`/${operation}`, (req, res) => handleOperation(req, res, `${operation}`))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});