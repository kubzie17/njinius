import React from 'react';
import Linkage from '@docusaurus/Link';
import videoPlayer from 'react-video-js-player';


function vidItem(props){
    const posterUrl='img/undraw_docusaurus_tree.svg';
    return (
        <>
            <li className="cards__item">

                <Linkage
                className="cards__item__link" to={props.path}>
                    <h1>{props.label}</h1>
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        <videoPlayer src={props.src} alt={posterUrl} widht="180" height="105"/>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Linkage>
            </li>
        </>
    )
}

export default vidItem