import React from 'react'
import CardItem from './carditem'
import './cards.css'
import useBaseUrl from '@docusaurus/useBaseUrl';

function cards(){
    return(
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src={useBaseUrl('img/business.png')}
                            text='Get tips for your small business or share your expertise'
                            label='Business'
                            path={useBaseUrl('business/')}
                        />
                        <CardItem
                            src={useBaseUrl('img/software.jpeg')}
                            text='Join in with other developers and share knowledge and learn from each other'
                            label='Software'
                            path={useBaseUrl('software/')}
                        />
                        <CardItem
                            src={useBaseUrl('img/book.jpg')}
                            text='Share your favourite book or discuss it with with other members'
                            label='Book Club'
                            path={useBaseUrl('book/')}
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default cards;