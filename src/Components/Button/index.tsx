import React from 'react';
import './style.css';
import  {ReactComponent as Arrow}  from '../../Images/arrow.svg'

export interface ButtonProps {
    primary?: boolean,
    backgroundColor?: string,
    icon?: boolean,
    label?: string
}

const Button = (props: ButtonProps) => {

    const mode = props.primary ? 'storybook-button--primary' : 'storybook-button--secondary'
    const backgroundColor = props.backgroundColor

    return (
        <button title='button' className={['storybook-button', mode].join(' ')} style={{ backgroundColor }}> 
            {props.label}
            {props.icon && <Arrow className='arrow' />}
        </button>
    )
}

export default Button