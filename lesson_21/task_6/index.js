const setButton = buttonText => {
    const setButton1 = document.querySelector('body');
    setButton1.innerHTML = `<button>${buttonText}</button>`;

    // setButton1.innerHTML = buttonText;
    // console.log(setButton1.innerHTML);
}
setButton('button text');

export { setButton }