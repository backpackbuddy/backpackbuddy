import toSlugCase from 'to-slug-case';

/*
 * filter data by ikonik
 * @params
 * array data
 * string input
 */

export default function filterData(data, input = '') {
    return data.filter(item => {
        const dataRute = toSlugCase(item.ikonik);
        const search = toSlugCase(input);

        return dataRute === search;
    });
}
