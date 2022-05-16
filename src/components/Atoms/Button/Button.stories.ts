import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'md',
      options: [
        'sm',
        'md',
        'lg',
      ],
      control: {
        type: 'select'
      },
    },
    radius: {
      defaultValue: 2,
      options: [
        1,
        2,
        3,
        4,
        'pill',
        'round'
      ],
      control: {
        type: 'select',
      },
    },
    outlined: {
      defaultValue: false,
      control: {
        type: 'boolean'
      },
    },
  },
}

export const Default = {
  args: {
    children: 'Hello World',
  },
};

export const Outlined = {
  args: {
    children: 'Hello World',
    outlined: true,
  },
};