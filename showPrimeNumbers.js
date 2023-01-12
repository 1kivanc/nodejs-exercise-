// 1 'e ve kendisine bölünecek , 1 ' den büyük pozitif tam sayı olacak

function showPrimeNumbers(lowNumber,HighNumber){

    for(let i  = lowNumber ; i <= HighNumber ; i++){
        let isPrime = true;
        for(let j = 2; j <= i; j++){
            if(i % j == 0 && j !== i){
                isPrime = false;
            }
        }

        if(isPrime ){
            console.log(i);
        }

    }
}

showPrimeNumbers(2,100);