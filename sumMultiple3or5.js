function sumMultipleOf3or5(num){
    if(typeof num !== 'number'){
        return `Error : ${num} is not a number`;
    }

    if(0 >= num){
        return 'Error : number must be greater than zero';
    }

    const isMultipleOf3Or5 = num => {
        if(num % 3 === 0 || num % 5 === 0){
            return num;
        }
        return 0;
    }

    let sum = 0;
    for(let i = 0; i <= num; i++){
        sum += isMultipleOf3Or5(i);
    }

    return sum;
}
module.exports = sumMultipleOf3or5;