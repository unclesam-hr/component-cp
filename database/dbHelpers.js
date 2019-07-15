const Models = require('./model.js');

getChairs = () => {
    return Models.Chairs.findAll({});
}

getChairByID = (id) => {
    return Models.Chairs.findOne({
        id
    });
}

getChairByName = (name) => {
    return Models.Chairs.findOne({
        name
    })
}

module.exports = {
    getChairs,
    getChairByID,
    getChairByName
}