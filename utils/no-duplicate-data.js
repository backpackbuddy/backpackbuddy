export default function noDuplicateData(data, input) {
    const uniqueData = [];

    data.forEach((item) => {
        if (input) {
            if (input == 'rute_ke') {
                uniqueData.indexOf(item[input].split(';')[0]) === -1 && uniqueData.push(item[input].split(';')[0]);
            } else {
                uniqueData.indexOf(item[input]) === -1 && uniqueData.push(item[input]);
            }

        } else {
            uniqueData.indexOf(item) === -1 && uniqueData.push(item)
        }
    });

    return uniqueData;
}

