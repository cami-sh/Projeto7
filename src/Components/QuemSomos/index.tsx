import React from 'react'
import './style.css'
import {ReactComponent as QuemSomosImg} from '../../Images/quemsomos.svg'
import Title2 from '../Title2'
import Text from '../Text'

const QuemSomos = () => {

    return (
        <div className='QuemSomos'>
            <QuemSomosImg />

            <div className='Content'>
                <Title2 primary={true} color={'#212353'}>We are a high level storage bank</Title2>
                <Text width={'474px'} height={'170px'}>
                    The place to store various data that you can access at any time through the internet 
                    and where you can carry it. This very flexible storage area has a high level of security. 
                    To enter into your own data you must enter the password that you created when you 
                    registered in this Data Warehouse. 
                </Text>
            </div>

        </div>
    )
}

export default QuemSomos