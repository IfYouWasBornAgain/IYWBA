const bodyParser = require('body-parser'); 
const path = require('path');
const result = require('./DB/result');

module.exports = (router) => {
   
    router.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'front-end', 'index.html'));
    });
    
    router.post('/', function(req, res) {
        let q1 = req.body.question1;
        let q2 = req.body.question2;
        let q3 = req.body.question3;
        let q4 = req.body.question4;
        let q5 = req.body.question5;
        let q6 = req.body.question6;
        let q7 = req.body.question7;

        let temp = new result ({
            "q1" : q1,
            "q2" : q2,
            "q3" : q3,
            "q4" : q4,
            "q5" : q5,
            "q6" : q6,
            "q7" : q7
        });

        temp.save(function(err) {
            if(err){
                console.log(err);
                res.status(500).json(err).end();  
                throw err; 
            } else {
                console.log('data save success');
                console.log(JSON.stringify(temp));
            }
        });

        res.send('<script>alert("응답해 주셔서 감사합니다."); location.href="/survey"</script>');

    });
    return router;
}