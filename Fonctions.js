const  calculateAverageRating =  (Ages) => {
    
    
    //let Ages = [12, 19, 20, 35, 9]

    if(Ages.length === 0) {
        return 0;
    }

    let Somme = 0;
        for (let Age of Ages) {
            Somme += Age;
        }
    return Somme / Ages.length;

}

function TestAge(){
    console.log("test")
    const Ages = [12, 19, 20, 35, 9]
    let result = calculateAverageRating(Ages);
    console.log("age means", result);
}



const  calculateAverageRatingSalim =  () => {
    const Ages = [12, 19, 20, 35, 9]


if(Ages.length === 0) {
    return 0;
}

let Somme = 0;
    for (let Age of Ages) {
        Somme += Age;
    }

    let mean = Somme / Ages.length;
    console.log("mean", mean)

    return mean;

}

