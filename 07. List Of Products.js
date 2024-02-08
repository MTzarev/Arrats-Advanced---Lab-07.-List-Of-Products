function listOfProducts(input) {
    let newArr = sorted(input);
    function sorted(input) {
        return input.sort((a, b) => a.localeCompare(b));
    }

    for (let i = 0; i < newArr.length; i++) {

        console.log(`${i + 1}.${newArr[i]}`);
    }

    console.log();
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
//listOfProducts(['Watermelon', 'Banana', 'Apples']);