const getCoffee = async () => {
    throw new Error("whoops!")
    return 'no hay';
}

(async () => {
    try {
        const coffee = await getCoffee();
        console.log(coffee);
    } catch (error) {
        console.log('error inesperasdo');

    }

})()

const coffee2 = getCoffee()
    .then(() => {

    })
    .catch(err => console.log('error'))

console.log('log fuera del then');