import React from 'react'
import CardItem from './viditem'
import './cards.css'
import useBaseUrl from '@docusaurus/useBaseUrl';
import Car from "../../static/video/car.mp4" 
import Var from "../../static/video/van.mp4" 
import bik from "../../static/video/bike.mp4" 


function cards(){
    return(
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__item'>
                        <CardItem
                            src={Car}
                            text='Get tips for your small business or share your expertise'
                            label='Business'
                            path={useBaseUrl('business/')}
                        />
                        <CardItem
                            src={Var}
                            text='Join in with other developers and share knowledge and learn from each other'
                            label='Software'
                            path={useBaseUrl('software/')}
                        />
                        <CardItem
                            src={bik}
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