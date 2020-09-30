// const allStud = ['Ann', 'Bob', 'Kate', 'Tom'];
// const retakeStud = ['Bob', 'Tom'];

// const getMessagesForBestStudents = (allStud, retakeStud) => {
//     const getallStud = allStud.filter((elem) => {
//         return retakeStud.includes(elem) !== true;
//     });

//     const message = getallStud.map((elem) => {
//         return ('Good job, ' + elem)
//     })
//     return message;
// };

// console.log(getMessagesForBestStudents(allStud, retakeStud));


const allStud = ['Ann', 'Bob', 'Kate', 'Tom'];
const retakeStud = ['Bob', 'Tom'];

const getMessagesForBestStudents = (allStud, retakeStud) => {
    return allStud
        .filter((elem) => !retakeStud.includes(elem))
        .map((elem) => 'Good job, ' + elem)
};

console.log(getMessagesForBestStudents(allStud, retakeStud));