import React from 'react'
import './style.css'

export interface Title2Props {
    primary?: boolean,
    color?: string,
    children?: string,
    align?: 'left' | 'right' | 'center' | 'justify' 
}

const Title2 = (props: Title2Props) => {

    const mode = props.primary ? 'storybook-title2--primary' : 'storybook-title2--secondary'
    const color = props.color
    const align = props.align

    return (
        <div className={['storybook-title2', mode].join(' ')} style={{color: color, textAlign: align}}>
            {props.children}
        </div>
    )
}

export default Title2