// // Метод арена должен генерировать 3 сектора

// const generateNumbersRange = (from, to) => {
//     const result = [];

//     for (let i = from; i <= to; i++) {
//         result.push(i);
//     }
//     return result;
// }


// //Когда генерирую линии
// const getLineSeats = () =>
//     // Я беру нужное мне количество линий
//     // Циклом меп я иду по номерам от 1 до 10
//     // Генерирую линию и линию заполняю сидениями
//     generateNumbersRange(1, 10)
//     .map(seatNumber => `
// <div 
//     class="sector_seat" 
//     data-seat-number=${seatNumber}

//     // Генерирую линию и линию заполняю сидениями
//     ></div>

//     //Мы сойденяем строки с помощью пустой строки
// `).join("");
// //  И после этого эта строка попадает в ${getSectorLines()}



// //Когда генерирую линии
// const getSectorLines = () => {

//     const seatString = getLineSeats();

//     // Я беру нужное мне количество линий
//     // Циклом меп я иду по номерам от 1 до 10
//     // Генерирую линию и линию заполняю сидениями
//     return generateNumbersRange(1, 10)
//         .map(lineNumber => `
// <div 
//     class="sector_line" 
//     data-line-number=${lineNumber}

//     // Генерирую линию и линию заполняю сидениями
//     >${seatString}</div>

//     //Мы сойденяем строки с помощью пустой строки
// `).join("");
//     //  И после этого эта строка попадает в ${getSectorLines()}

// }


// const renderArena = () => {

//     const arena = document.querySelector('.arena');
//     const lineString = getSectorLines();
//     const sectors = generateNumbersRange(1, 3).map(sectorNumber => `
//     <div 
//         class="sector_number" 
//         data-sector-number=${sectorNumber}

//         //Через функцию мы вставляем ряды
//         // и получаем массив строк
//         >${lineString}</div>

//         //Мы сойденяем строки с помощью пустой строки
//     `).join("")

//     // И вставляем в ел арена

//     arena.append = sectors;
// }
// renderArena();

const generateNumbersRange = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    }
    return result;
};

const getLineSeats = () => {
    return generateNumbersRange(1, 10)
        .map(
            (seatNumber) => `
      <div 
        class="sector__seat" 
        data-seat-number="${seatNumber}"
      ></div>
    `
        )
        .join("");
};

const getSectorLines = () => {
    const seatsString = getLineSeats();
    return generateNumbersRange(1, 10)
        .map(
            (lineNumber) => `
      <div 
        class="sector__line" 
        data-line-number="${lineNumber}"
      >${seatsString}</div>
    `
        )
        .join("");
};

const arenaElem = document.querySelector(".arena");

const renderArena = () => {
    const linesString = getSectorLines();

    const sectorsString = generateNumbersRange(1, 3)
        .map(
            (sectorNumber) => `
      <div 
        class="sector" 
        data-sector-number="${sectorNumber}"
      >${linesString}</div>
      `
        )
        .join("");

    arenaElem.innerHTML = sectorsString;
};

const onSeatSelect = event => {
    //Проверяет есть ли внутри арены класс sector__seat
    const isSeat = event.target.classList.contains('sector__seat')

    // Если не сидения то я просто выхожу
    if (!isSeat) {
        return;
    }
    const seatNumber = event.target.dataset.seatNumber;
    const lineNumber = event.target.closest(".sector__line").dataset.lineNumber;
    const sectorNumber = event.target.closest(".sector").dataset.sectorNumber;

    const selectedSeatElem = document.querySelector(".board__selected-seat");

    selectedSeatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener("click", onSeatSelect);

renderArena();