import filterData from '../../utils/filter-data';
import FreeItinerary from '../../components/destinasi/free-itinerary.jsx';
import PremiumItinerary from '../../components/destinasi/premium-itinerary';
import toSlugCase from 'to-slug-case';
import uniqueBy from 'unique-by';
import '../../styles/itinerary.scss';

const dataFree = require('../../data.json');
const dataPremium = require('../../premium-itinerary.json');
const dataJson = [ ...dataFree, ...dataPremium ];

function Itinerary({ place }) {
    const data = filterData(dataJson, place);

    return data[0]?.is_free
        ? <FreeItinerary place={place} data={data} />
        : <PremiumItinerary place={place} data={data} />;
}


/**
 * for nextjs export
 */
export async function getStaticPaths() {
    const uniqueData = [
        ...uniqueBy(dataJson, 'ikonik'),
        ...require('../../premium-itinerary.json')
    ];

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
