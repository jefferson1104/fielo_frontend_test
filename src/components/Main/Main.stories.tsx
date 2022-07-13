import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = () => (
  <Main
    background={
      'https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg'
    }
  >
    <h1 style={{ textAlign: 'center', fontSize: '24px', color: '#fff' }}>
      Main Component
    </h1>
  </Main>
)
