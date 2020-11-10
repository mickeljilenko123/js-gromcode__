export const addImage = (imgSrc) => {
    const p = new Promise((resolve, reject) => {
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
            //в случае упеха передаём в промис эту функцию
            const { width, height } = imgElem;
            resolve({ width, height });
        };
        //подписываемся на событие загрузки картинки 1111
        imgElem.addEventListener("load", onImageLoaded);

        //сообщение об ошибке, тоже передаём в промис, внутри создаём объект ОШИБКИ
        imgElem.addEventListener("error", () =>
            reject(new Error("Image load is failed..."))
        );
    });
    return p;
};

const imgSrc =
    "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg";

//callack example

//test call
const resultPromise = addImage(imgSrc);
//подписка на результат работы функции с промисом
resultPromise.then((data) => onImageLoaded(data));
const onImageLoaded = (data) => {
    const { width, height } = data;
    const sizeElem = document.querySelector(".image-size");
    sizeElem.textContent = `${width} x ${height}`;
};

//
resultPromise.catch((error) => console.log(error));
// console.log(result);
//картинка загружается асинхронно!!!!