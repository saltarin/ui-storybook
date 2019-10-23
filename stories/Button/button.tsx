import * as React from 'react';
import { Button } from '../../src/components/Button';
import * as readme from './button.md';
import { withDocs } from 'storybook-readme';

const Wrapper = () => {
    return (
        <>
            <Button name="Click!"/>
        </>
    );
}

export default () => {
    return withDocs(
        readme,
        () => <Wrapper/>
    )
}