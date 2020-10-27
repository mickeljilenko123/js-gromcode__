const setButton = buttonText => {
    const setButton1 = document.querySelector('body');
    return setButton1.innerHTML = '<button>button text</button>';

    // setButton1.innerHTML = buttonText;
    // console.log(setButton1.innerHTML);
}
setButton('button text');

export { setButton }