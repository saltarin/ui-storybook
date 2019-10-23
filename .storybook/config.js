import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
    name: 'cxpress',
    showAddonPanel: true,
    hierarchyRootSeparator: /\//
});

const req = require.context('../stories/', true, /story.tsx$/);

const loadStories = () => {
    req.keys().forEach((filename) => req(filename))
} 
configure(loadStories, module);