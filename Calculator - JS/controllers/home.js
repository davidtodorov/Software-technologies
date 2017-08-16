const Calculator = require('../models/Calculator');

module.exports = {
    indexGet: (req, res) => {
        res.render('home/index');
    },
    indexPost: (req, res) => {
        const calcParams = req.body['calculator'];


        let leftOperand = Number(calcParams.leftOperand);
        let rightOperand = Number(calcParams.rightOperand);
        let operator = calcParams.operator;

        let calculator = new Calculator(
            leftOperand,
            rightOperand,
            operator
        );

        let result = calculator.calculateReuslt();
        res.render('home/index', {
            result:result
        });

    }
}

