function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /[,\n]/;
    let numList = [];
    if (numbers.startsWith("//")) {
        const [delimiterLine, ...numberLines] = numbers.split('\n');
        delimiter = delimiterLine.substring(2);
        numbers = numberLines.join('\n');
    }
    numList = numbers.split(new RegExp(delimiter));
    const negatives = numList.filter(num => {
        const n = parseInt(num, 10);
        return n < 0;
    });

    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: " + negatives.join(', '));
    }
    const sum = numList.reduce((acc, num) => acc + (parseInt(num, 10) || 0), 0);
    return sum;
}
