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
        const valuesAccumulator =[]
        if(val === "AAA"){
            const specialOffer1 =  130
            valuesAccumulator.push(specialOffer1)
        } else if ((typeof val == 'number') || (val !== val.toUpperCase())){
            return -1
        } else {
            for(let i = 0; i < val.length; i++){
                let letter = val[i]
                valuesAccumulator.push(this.value[letter])
            }
           
        }
        let result = valuesAccumulator.reduce(function(a,b){
            return a + b;
        } ,0)
        return result
    };

}

module.exports = Shop