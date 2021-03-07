import React from 'react'
import './style.css'

export interface LinkProps {
    primary?: boolean;
    label: string
}

const Link = (props: LinkProps) => {

    const mode = props.primary ? 'storybook-link--primary' : 'storybook-link--secondary'

    return (
        <div className={['storybook-link', mode].join(' ')}>
            {props.label}
        </div>
    )
}

export default Link