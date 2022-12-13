import type { ComponentMeta, ComponentStory } from '@storybook/react'

import FrameLayout from './FrameLayout'

export const generated: ComponentStory<typeof FrameLayout> = (args) => {
  return <FrameLayout {...args} />
}

export default {
  title: 'Layouts/FrameLayout',
  component: FrameLayout,
} as ComponentMeta<typeof FrameLayout>
