import noDuplicateData from '../utils/no-duplicate-data';

const dataJson = require('../data.json');

function allCategories() {
    const categories = [];

    dataJson.forEach(({ kategori, kecamatan }) => {
        // transform to array
        kategori = kategori.split(';');
        // check the item is already in arr or not

        categories.push(...kategori);
    });

    return noDuplicateData(categories);
}

export default allCategories;
