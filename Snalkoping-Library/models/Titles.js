const bookshelf = require('./bookshelf');


const Titles = bookshelf.model('Titles', {
    tableName: "Titles",
    titles() {
        
    }
});


module.exports = Titles;