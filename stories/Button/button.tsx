import * as React from 'react';
import { Button } from '../../src/components/Button';
import readme from './button.md';
import { withDocs } from 'storybook-readme';
import { withGlobalStyles } from '../../src/config';

const Wrapper = () => {
    return (
        <div>
            <Button name="Click!"/>
        </div>
    );
}

export default () => withDocs(
    readme,
    () => withGlobalStyles(Wrapper)
)