class Shop{

    constructor(){
        this.value = {
            "A": 50,
            'B': 30,
            "C": 20,
            "D": 15
        }
    }

    numbersOfAs(par){
        const numbOfAs = par.match(/A/g)
        if(numbOfAs === null){
            return 0
        } 
        return numbOfAs.length
    }
    numbersOfBs(par){
        const numbOfBs = par.match(/B/g)
        if(numbOfBs === null){
            return 0
        }
        return numbOfBs.length
    }


    checkout(val){

        let valuesContainer = []

        if((typeof val === 'number') || (typeof val !== 'string') || (val !== val.toUpperCase())){
            return -1
        } 
        if(this.numbersOfAs(val) >= 3){   
            valuesContainer.push((Math.floor((this.numbersOfAs(val)/3)) * 130) + ((this.numbersOfAs(val) % 3) * 50 ))
        } else if (this.numbersOfBs(val) >= 2){
            valuesContainer.push((Math.floor((this.numbersOfBs(val)/2)) * 45) + ((this.numbersOfBs(val) %2) * 30))
        } else {
            for(let i = 0; i < val.length; i++){
                let letter = val[i]
                valuesContainer.push(this.value[letter])
            }
        }
        
        let result = valuesContainer.reduce((a, b) => a + b, 0)
        return result
        
    }
}

module.exports = Shop;