import React from 'react'
import './style.css'

export interface TextProps {
    primary?: boolean;
    children?: string;
    width?: string;
    height?:string;
    align?: 'left' | 'right' | 'center' | 'justify' 
}

const Text = (props: TextProps) => {

    const width = props.width
    const height = props.height
    const align = props.align

    return (
        <p className='Text' style={{width: width, height: height, textAlign: align}}>
            {props.children}
        </p>
    )
}

export default Text