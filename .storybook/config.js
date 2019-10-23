import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'cxpress',
    showAddonPanel: true,
    hierarchyRootSeparator: /\//
});

const req = require.context('../stories/', true, /story.tsx$/);

configure(req, module);