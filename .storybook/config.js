import { configure } from '@storybook/react';

configure(require.context('../storybook/stories', true, /\.stories\.[tj]sx?$/), module);

import { addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
