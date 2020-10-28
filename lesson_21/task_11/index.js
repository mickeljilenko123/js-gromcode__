const manageClasses = () => {
        const getListItems = document.querySelector('.list')
        const elem = document.querySelector('.one');
        elem.classList.add('selected');

        const elemTwo = document.querySelector('.two');
        elemTwo.classList.remove('selected');

        const elemThree = document.querySelector('.three');
        elemThree.classList.remove('three_done');

        const elemFour = document.querySelector('.four');
        elemFour.classList.add('another-class');

        // console.log(getListItems);
    }
    // manageClasses();
export { manageClasses }