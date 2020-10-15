import toSlugCase from 'to-slug-case';

/*
 * filter data by kecamatan
 */
export default function filterData(data, place) {
    return data.filter(item => {
        const dataKecamatan = toSlugCase(item.kecamatan);
        const dataKabupaten = toSlugCase(item.kabupaten);
        const search = toSlugCase(place);

        return dataKecamatan == search || dataKabupaten == search;
    });
}
