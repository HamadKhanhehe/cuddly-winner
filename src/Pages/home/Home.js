import requests from "../../Request";
import Row from "../../components/row/Row";
import Main from "../../components/main/Main";


export default function Home({item}) {

    return (
        <>
        <Main />
        <Row title="Now Playing" fetchURL={requests.requestNowPlaying} />
        <Row title="Popular" fetchURL={requests.requestPopular} />
        <Row title="Top Rated" fetchURL={requests.requestTopRated} />
        <Row title="Upcoming" fetchURL={requests.requestUpcoming} />
        

        </>
    )
}























