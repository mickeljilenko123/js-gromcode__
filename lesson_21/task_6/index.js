const setButton = buttonText => {
    const setButton1 = document.querySelector('body');
    return setButton1.innerHTML = buttonText;

    // setButton1.innerHTML = buttonText;
    // console.log(setButton1.innerHTML);
}
setButton('<button>button text</button>');

export { setButton }