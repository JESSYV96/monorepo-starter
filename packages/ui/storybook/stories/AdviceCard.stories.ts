import '@jessy/shared/style.css'
import type { Meta, StoryObj } from '@storybook/vue3'
import { AdviceCard } from '@jessy/shared'

const meta: Meta<typeof AdviceCard> = {
  title: 'Shared/AdviceCard',
  component: AdviceCard
}

export default meta
type Story = StoryObj<typeof AdviceCard>

export const AdviceCardComponent: Story = {
  render: (args) => ({
    components: { AdviceCard },
    setup() {
      return { args }
    },
    template: '<AdviceCard v-bind="args" />'
  }),
  args: {
    advice: { id: 121, advice: "L'important c'est de participer" }
  }
}
