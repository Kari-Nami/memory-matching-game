
// fisher-yates shuffle to randomise the card locations
export default function shuffle(array) {
    var result = [...array]
    for (let i = result.length-1; i > 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i+1))

        const temp = result[randomIndex];
        result[randomIndex] = result[i];
        result[i] = temp;
    }

    return result
}