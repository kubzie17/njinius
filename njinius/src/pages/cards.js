import React from 'react'
import CardItem from './carditem'
import './cards.css'
import useBaseUrl from '@docusaurus/useBaseUrl';

function cards(){
    return(
        <div className='cards'>
            <h1>Business Track</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src={useBaseUrl('img/business.png')}
                            text='Get tips for your small business or share your expertise'
                            label='Busienss'
                            path='business/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default cards;