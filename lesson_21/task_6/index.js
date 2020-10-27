const setButton = buttonText => {
    const setButton1 = document.querySelector('body');
    setButton1.innerHTML = buttonText;

    // setButton1.innerHTML = buttonText;
    // console.log(setButton1.innerHTML);
}
console.log(setButton('<button>button text</button>'));