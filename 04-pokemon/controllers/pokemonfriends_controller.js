const PokemonFriends = require('../models/PokemonFriends');
//const modules = require('../models');


/*
    Create - skapa ett kort i databasen
*/
const create = async(req, res) => {
    try {

        let friend = new PokemonFriends(req.body).save();

        return res.status(201).send({
            success: true,
            data: {
                friend
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

        let friend;
        if (req.params.id) {
            friend = await PokemonFriends.where({ "id" : req.params.id }).fetch( { require: false });
        } else {
            friend = await PokemonFriends.fetchAll({ withRelated: ['cards'] });
        }

        if(!friend) {
            return res.status(400).send({
                success: false, 
                data: "Not found"
            });
        }
 
        return res.status(200).send({
            success: true, 
            data: {
                friend
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
        
        let friend = await PokemonFriends.where( { "id" : req.params.id } ).fetch({ require  : true });

        friend = await friend.set(req.body).save();

        return res.status(200).send(
            {
                success: true,
                data: {
                    friend
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
        
        let friend = await PokemonFriends.where( { "id" : req.params.id } ).fetch({ require  : true });

        friend = await friend.destroy(req.body).then();

        return res.status(200).send(
            {
                success: true,
                data: {
                    friend
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

const addCard = async(req, res) => {
    try {

        let friend = await PokemonFriends.where( { "id" : req.params.id } ).fetch({ require  : true });

        friend = await friend.cards().attach(req.body);      //destroy(req.body).then();

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
    remove,
    addCard
}