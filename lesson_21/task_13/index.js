const getSection = num => {
        const getElem = document.querySelector(`span[data-number="${num}"]`);
        // console.log(getElem);
        const getTag = getElem.closest('div');
        // console.log(getTag);
        const getDataSection = getTag.getAttribute('data-section');
        // console.log(getDataSection);
        return getDataSection;
    }
    // getSection(5);
export { getSection }