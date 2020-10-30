import React from 'react';
import Linkage from '@docusaurus/Link';
import { Link } from 'react-dom';

function cardItem(props){
    return (
        <>
            <li className="cards__item">
                <Linkage
                className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Business" className="cards__item__img"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Linkage>
            </li>
        </>
    )
}

export default cardItem;