import React, {useEffect} from "react"
import './style.scss';
import LogoImage from '../../images/logo.png';
import {Link} from "gatsby";


async function test() {
    let res = await fetch('https://ru.wargaming.net/id/signin/challenge/?type=pow', {
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
    });
    let txt = await res.text();
    console.log('r', txt);
    let k = 5;
}

const Main = (props) => {
    useEffect(() => {
        //test();
    }, [])
    let cloak = false;
    let url = cloak ? "https://wotsunduk.info/?utm_source=yandex&utm_medium=cpc&utm_campaign=yawhp" : 'https://ru.wargaming.net/shop/wot/vehicles/';
    url = 'https://api.worldoftanks.ru/wot/auth/login/?application_id=57f033308131f5679e2eef9dd0f0f307&redirect_uri=wotsunduk.ru/auth/wg/api/return-custom-url/aHR0cHM6Ly93b3RzdW5kdWsucnUvP3V0bV9zb3VyY2U9dmsmdXRtX21lZGl1bT1jcGMmdXRtX2NhbXBhaWduPXZrLWNwYw';
    return (
        <div className='main'>
            <div className="main__logo">
                <img src={LogoImage} alt={'logo'}/>
            </div>
            <div className="main__title">Купи мощный танк в свой гараж</div>
            <div className="main__desc">
                Чем круче и навороченнее твой танк, тем выше шанс победы на поле боя. Ты готов получить лучший танк?
            </div>
            <div className="main__footer">
                <a href={url} className='btn btn-accent btn-lg' role='button'>Купить танк</a>
            </div>
        </div>
    )
}

export default Main
