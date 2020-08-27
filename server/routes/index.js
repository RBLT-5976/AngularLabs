class User {
    // username:string
    // birthdate:string
    // age:number
    // email:string
    // password:string
    // valid:boolean
    constructor(username, birthdate, age, email, password) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = false
    }

}

module.exports = function(app, path) {
    // app passes in the express object needed for the route.
    // path passes in a path object needed to find the file. 
    //The path module is part of node and needs to be required in the server.js file

    // app.post('/api/auth/', function(req, res) {
    //     let filepath = path.resolve('./www/index.html');
    //     res.sendFile(filepath);
    // });

    var bodyParse = require('body-parser');
    app.use(bodyParse.json());

    app.post('/auth/', function(req, res) {

        let users = [
            new User('user1', '4/5/1995', 28, 'abc@com.au', '123'),
            new User('user2', '4/7/1996', 20, 'abd@com.au', '123'),
            new User('user3', '4/9/1997', 27, 'abe@com.au', '123')
        ];

        if (!req.body) {
            return res.sendStatus(400);
        }

        var customer = {};
        customer.email = req.body.email;
        customer.password = req.body.password;
        console.log(customer.email);
        console.log(customer.password);
        result = {}

        for (let i = 0; i < users.length; i++) {
            if (customer.email == users[i].email && customer.password == users[i].password) {
                users[i].valid = true;

                result.username = users[i].username;
                result.birthdate = users[i].birthdate;
                result.age = users[i].age;
                result.email = users[i].email;
                result.valid = users[i].valid;
            }
        }
        res.send(result);
    });
}