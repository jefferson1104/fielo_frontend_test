import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    mockBackground:
      'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg'
  }
} as Meta

export const Basic: Story = (args) => (
  <div style={{ height: '100vh' }}>
    <Main background={args.mockBackground} />
  </div>
)
