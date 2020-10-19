'use strict';

import toSlugCase from "to-slug-case";

function removeDuplicateObject(data, input) {

    const unique = data.reduce((uniqueData = [{}, {}], item) => {
        if (!(item[input] in uniqueData.map(e => e[input]))) item;
    });

    console.log(unique);
}

export default removeDuplicateObject;
