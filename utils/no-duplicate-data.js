export default function noDuplicateData(data, input) {
    const uniqueData = [];

    data.forEach((item) => {
        input
            ? uniqueData.indexOf(item[input]) === -1 && uniqueData.push(item[input])
            : uniqueData.indexOf(item) === -1 && uniqueData.push(item);
    });

    return uniqueData;
}

