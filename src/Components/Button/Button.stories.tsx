import React from 'react'
import { Story , Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from './index'

export default {
    title: 'Componente Button',
    component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({})
Primary.args = {
        label: 'Request Demo',
        icon: true,
        primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
        label: 'Learn More',
        icon: false,
        primary: false,
        backgroundColor: '#9C69E2',
}
