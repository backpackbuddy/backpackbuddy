import toSlugCase from 'to-slug-case';

/*
 * filter data by kecamatan
 * @params
 * array data
 * string input
 */
export default function filterData(data, input) {
    return data.filter(item => {
        const dataKecamatan = toSlugCase(item.kecamatan);
        const dataKabupaten = toSlugCase(item.kabupaten);
        const search = toSlugCase(input);

        return dataKecamatan == search || dataKabupaten == search;
    });
}
