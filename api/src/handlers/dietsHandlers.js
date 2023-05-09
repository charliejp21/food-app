const { getDietsTypesDb } = require("../controllers/getDiets");

const getDietsHandler = async (_req, res) => {

    try {

        res.send(await getDietsTypesDb()); 
        

    } catch (error) {
     
        res.status(404).json({error: error.message});
    }
};

module.exports = { getDietsHandler };