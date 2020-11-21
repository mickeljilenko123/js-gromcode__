const getString = str => {
    let newArr = [];
    const arr = str.split('');
    arr.forEach(e => {
        if (typeof(e) !== (Number)) {
            console.log(e);
        }

        return newArr;
    });
}
getString('ey1');

function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "")
        .toLowerCase() ===
        str
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")
    );
}