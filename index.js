function writeCards(stringNames, eventName){
    const newArray = []

    for(let counter = 0; counter < stringNames.length; counter++){
        const thankYouMessage = `Thank you, ${stringNames[counter]}, for the wonderful ${eventName} gift!`
        newArray.push(thankYouMessage)
    }

    return newArray
}

function countDown(number){
    while(number >= 0){
        console.log(number)
        number--
    }
}