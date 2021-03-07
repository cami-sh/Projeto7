import React from 'react'
import './style.css'
import Link from '../Link'

const Menu = () => {

    return (
        <div className='Menu'>
            <Link primary={true} label={'About'} />
            <Link primary={false} label={'Help'} />
            <Link primary={false} label={'Features'} />
            <Link primary={false} label={'Signup'} />

        </div>
    )
}

export default Menu