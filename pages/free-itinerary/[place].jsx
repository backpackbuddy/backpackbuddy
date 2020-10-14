import { useRouter } from 'next/router';

function Itinerary({ url }) {
    const router = useRouter();

    console.log(router.query);
    console.log(router.query.place);
    console.log(router);
    console.log(url);

    return (
        <h1>Itinerary</h1>
    );
}

export default Itinerary;
