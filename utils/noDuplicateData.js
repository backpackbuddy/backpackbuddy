export default function noDuplicateData(data) {
    const uniqueData = [];

    data.forEach(({ kecamatan }) => {
        return uniqueData.indexOf(kecamatan) === -1 && uniqueData.push(kecamatan);
    });

    return uniqueData;
}

