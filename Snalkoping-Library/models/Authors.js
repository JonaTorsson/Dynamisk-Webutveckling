const bookshelf = require('./bookshelf');


const Authors = bookshelf.model('Authors', {
    tableName: "Authors",
    titles() {
        
    }
});


module.exports = Authors;