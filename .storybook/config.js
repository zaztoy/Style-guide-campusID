import { configure } from '@storybook/react'

// automatically import all files ending in *.stories.js
configure(require.context('../storybook/stories', true, /\.stories\.js$/), module)

import { addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))
