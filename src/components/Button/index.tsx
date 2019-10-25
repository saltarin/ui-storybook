import * as React from 'react';
import * as propTypes from 'prop-types';
import { OpenSansButton, RobotoButton } from './styled';

interface Props {
    name: string;
}

const Button: React.FC<Props> = ({name}) => (
    <div>
        <OpenSansButton>Click!</OpenSansButton>
        <RobotoButton>Click!</RobotoButton>
    </div>
)

Button.propTypes = {
    name: propTypes.string.isRequired
}

Button.defaultProps = {
    name: 'empty'
}

export { Button }