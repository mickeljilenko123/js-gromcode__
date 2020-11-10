"use strict";
export const addImage = (imgSrc, callback) => {
    //создаём елемент картинки
    const imgElem = document.createElement("img");
    //указываем правильный путь для картинки
    imgElem.src = imgSrc;
    //назначаем атрибуты
    imgElem.setAttribute("alt", "My Photo");
    //методом append добавляем картинку в элемент ".page"
    const containerElement = document.querySelector(".page");
    containerElement.append(imgElem);
    //описываем функцию onImageLoaded 222
    const onImageLoaded = () => {
        callback(null, imgElem);
    };
    //подписываемся на событие загрузки картинки 1111
    imgElem.addEventListener("load", onImageLoaded);

    //сообщение об ошибке
    imgElem.addEventListener("error", () => callback("Image load is failed..."));

    // console.log({ width, height });
};

// const imgSrc =
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

//callack example
const onImageLoaded = (error, imgElem) => {
    if (error) {
        console.log(error);
        return;
    }
    const { width, height } = imgElem;
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `${width} x ${height}`;
};

//test call
// addImage(
//   "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg",
//   onImageLoaded
// );
//картинка загружается асинхронно!!!!