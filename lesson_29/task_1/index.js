const addImage = (imgSrc, callback) => {
    // Создаем ел картинки
    const elemImage = document.createElement('img');
    elemImage.setAttribute('alt', 'My photo');

    elemImage.src = imgSrc;

    const containerElem = document.querySelector('.page');
    containerElem.append(elemImage);

    const onImageLoaded = () => {
        const { width, height } = elemImage;
        callback(null, { width, height });
    }
    elemImage.addEventListener('loaded', onImageLoaded);
    elemImage.addEventListener('error', () => callback('Image load failed'));


    //TODO write your code here

};

//callack example
const onImageLoaded = (error, data) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
}

//test call
addImage("https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg", onImageLoaded);
export { addImage }