import React from "react"
import './style.scss';
import LogoImage from '../../images/logo.png';
import {Link} from "gatsby";



const Main = (props) => {
    let cloak = false;
    const url = cloak ? "https://wotsunduk.info" : 'https://ru.wargaming.net/shop/wot/vehicles/';
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
                <Link to={url} className='btn btn-accent btn-lg' role='button'>Купить танк</Link>
            </div>
        </div>
    )
}

export default Main
