import React from 'react'
import Title2 from '../Title2'
import Text from '../Text'
import './style.css'

const Features = () => {
    return (
        <div className='Features'>
            <Title2 primary={false} color={'#212353'} align={'center'} >Features</Title2>
            <Text width={'584px'} height={'58px'} align={'center'}>
                Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.
            </Text>
        </div>
    )
}

export default Features