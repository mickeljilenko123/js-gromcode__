function finishList() {

    const itemOne = document.createElement('li');
    itemOne.textContent = '1';
    document.querySelector('ul').prepend(itemOne);

    const itemFour = document.createElement('li');
    itemFour.textContent = '4';
    document.querySelector('.special').before(itemFour);

    const itemSix = document.createElement('li');
    itemSix.textContent = '6';
    document.querySelector('.special').after(itemSix);

    const itemEight = document.createElement('li');
    itemEight.textContent = '8';
    document.querySelector('ul').append(itemEight);

    // console.log(itemOne)
    // console.log(itemFour)
    // console.log(itemSix)
    // console.log(itemEight)
};

// finishList();

export { finishList };