import React from 'react'
import { Story , Meta } from '@storybook/react/types-6-0'

import Link , { LinkProps } from './index'

export default {
    title: 'Componente Link',
    component: Link,
} as Meta

const Template: Story<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({})
Primary.args = {
    primary: true,
    label: 'About'
}

export const Secondary = Template.bind({})
Secondary.args = {
    primary: false,
    label: 'Help'
}