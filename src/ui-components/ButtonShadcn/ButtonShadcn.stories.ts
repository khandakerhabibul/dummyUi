import type { Meta, StoryObj } from '@storybook/react';
import ButtonShadcn from './ButtonShadcn';

const meta = {
  title: 'UI/ButtonScn',
  component: ButtonShadcn,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => Story()],
} satisfies Meta<typeof ButtonShadcn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Click Me' },
};

// export const Secondary: Story = {
//   args: { children: 'Click Me' },
// };

// export const WithOnClick: Story = {
//   args: {
//     children: 'Click Me',
//   },
// };

// export const Disabled: Story = {
//   args: { children: 'Click Me' },
// };
