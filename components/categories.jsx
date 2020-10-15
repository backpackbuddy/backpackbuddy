import Link from 'next/link';
import noDuplicateData from '../utils/no-duplicate-data';
import filterData from '../utils/filter-data';

import allCategories from '../data-store/all-categories';

function Categories() {
    console.log(allCategories());

    return (
        <>
            {/*}
            <Link href={link}>
                <a>{link}</a>
            </Link>
            {*/}
        </>
    );
}

export default Categories;
