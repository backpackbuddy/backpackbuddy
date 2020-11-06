import filterData from '../../utils/filter-data';
import FreeItinerary from '../../components/destinasi/free-itinerary.jsx';
import PremiumItinerary from '../../components/destinasi/premium-itinerary';
import toSlugCase from 'to-slug-case';
import uniqueBy from 'unique-by';
import '../../styles/itinerary.scss';

const dataJson = require('../../data.json');

function Itinerary({ place, is_free }) {
    const data = filterData(dataJson, place);

    return is_free
        ? <FreeItinerary place={place} data={data} />
        : <PremiumItinerary place={place} data={data} />;
}


/**
 * for nextjs export
 */
export async function getStaticPaths() {
    const uniqueData = uniqueBy(dataJson, 'ikonik');

    return {
        paths: uniqueData.map(({ ikonik }) => ({
            params: {
                place: toSlugCase(ikonik)
            }
        })),
        fallback: false
    }
}

/**
 * for nextjs export
 */
export async function getStaticProps({ params }) {
    const { place } = params;

    return { 
        props: { place }
    };
}

export default Itinerary;
