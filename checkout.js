class Shop{

    constructor(){
        this.value = {
            "A":50,
            "B":30,
            "C":20,
            "D":15
        }
    }


    checkout(val){
        const array =[]
        if ((typeof val == 'number') || (val !== val.toUpperCase())){
            return -1
        } else {
            for(let i = 0; i < val.length; i++){
                let letter = val[i]
                array.push(this.value[letter])
            }
            let result = array.reduce(function(a,b){
                return a + b;
            } ,0)
            return result
        }
    };

}

module.exports = Shop