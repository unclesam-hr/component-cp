const Models = require('./model.js');

getChairs = () => {
    return Models.Chairs.findAll({});
}

getChairByCollectionID = (id) => {
    return Models.Chairs.findAll({
        where:
        {
            collection_id: Number(id)
        }
    });
}

getChairByName = (name) => {
    return Models.Chairs.findOne({
        name
    })
}

module.exports = {
    getChairs,
    getChairByCollectionID,
    getChairByName
}