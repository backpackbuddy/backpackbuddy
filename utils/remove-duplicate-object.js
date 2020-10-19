'use strict';

function removeDuplicateObject(data, input) {

    return data.filter((obj, _, self) => (
        self.findIndex((item) => (
            item[input] === obj[input]
        ))
    ));
}

export default removeDuplicateObject;
