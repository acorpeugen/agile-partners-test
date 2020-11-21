import React from 'react';
import { Meta } from '@storybook/react';
import Icon, { IconProps } from './Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
} as Meta;

const Story = (props: IconProps) => <Icon {...props} />;
export const IconDefault = Story.bind({});
