import { configure, addDecorator, addParameters } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { addReadme } from 'storybook-readme';

setOptions({
    name: 'cxpress',
    showAddonPanel: true,
    hierarchyRootSeparator: /\//
});

addParameters({
    readme: {
        codeTheme: 'atom-dark'
    }
})

addDecorator(addReadme);

const req = require.context('../stories/', true, /story.tsx$/);

configure(req, module);