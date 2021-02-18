class Shop{

    checkout(val){
        if (  (typeof val == 'number') || (val !== val.toUpperCase())  ){
            return -1
        }
    };

}

module.exports = Shop