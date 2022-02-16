const Authors = require('../models/Authors');
//const modules = require('../models');


/*
    Create - skapa ett kort i databasen
*/
const create = async(req, res) => {
    try {

        let card = new Authors(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                card
            }
        })

        req.body
    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        }
        );
    }
}


/*
    Read -läs ett eller flera kort från databasrn
*/
const read = async(req, res) => {
    try {

        let card;
        if (req.params.id) {
            card = await Authors.where({ "id" : req.params.id }).fetch( { require: false/*, withRelated: ['wonBattles', 'lostBattles'] */});
        } else {
            card = await Authors.fetchAll(/*{ require: false, withRelated: ['wonBattles', 'lostBattles']  }*/);
        }

        if(!card) {
            return res.status(400).send({
                success: false, 
                data: "Not found"
            });
        }
 
        return res.status(200).send({
            success: true, 
            data: {
                card
            }
        });
    } catch(err) {
        return res.status(500).send({
            success: false,
            data: err.message
        }
        );
    }
}

/*
    UPDATE - Uppdaterar ett kort i databasen
*/

const update = async(req, res) => {
    try {
        
        let card = await Authors.where( { "id" : req.params.id } ).fetch({ require  : true });

        card = await card.set(req.body).save();

        return res.status(200).send(
            {
                success: true,
                data: {
                    card
                }
            }
        );

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        }
        );
    }
}

/*
    DELETE - Radera ett kort
*/

const remove = async(req, res) => {
    try {
        
        let card = await Authors.where( { "id" : req.params.id } ).fetch({ require  : true });

        card = await card.destroy(req.body).then();

        return res.status(200).send(
            {
                success: true,
                data: {
                    card
                }
            }
        );

    } catch (err) {
        return res.status(500).send({
            success: false,
            data: err.message
        }
        );  
    }
}

module.exports = {
    create,
    read,
    update,
    remove
}