exports.employees = [
    {
        "_id": "56731461c8df4ffb6e02580f",
        "age": 21,
        "eyeColor": "blue",
        "name": "Jimmie Rios",
        "gender": "female",
        "company": "BYTREX",
        "email": "jimmierios+1@bytrex.com"
    }
    ,
    {
        "_id": "56731461d61652cf56db0b65",
        "age": 28,
        "eyeColor": "blue",
        "name": "Riley Cohen",
        "gender": "male",
        "company": "ARTIQ",
        "email": "rileycohen123@artiq.com"
    }
    ,
    {
        "_id": "567314618f17220f2a90ab71",
        "age": 35,
        "eyeColor": "brown",
        "name": "Lillie Gonzalez",
        "gender": "female",
        "company": "STREZZO",
        "email": "lilliegonzalez#@strezzo.com"
    }
    ,
    {
        "_id": "567314616783f2132543053c",
        "age": 33,
        "eyeColor": "brown",
        "name": "Audrey Stone",
        "gender": "female",
        "company": "ISOSPHERE",
        "email": "audreystone&1@isosphere.com"
    }
    ,
    {
        "_id": "567314610ac9df18015efee4",
        "age": 22,
        "eyeColor": "green",
        "name": "Cora Wolf",
        "gender": "female",
        "company": "NAMEGEN",
        "email": "corawolf.deep@namegen.com"
    }
]
var emailReg = /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/;
exports.validate = function (employee) {
    return emailReg.test(employee.email) && !isNaN(employee.age);
}