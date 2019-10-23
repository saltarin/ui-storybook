import * as React from 'react';
import * as propTypes from 'prop-types';

interface Props {
    name: string;
}

const Button: React.FC<Props> = ({name}) => <button>{name}</button>

Button.propTypes = {
    name: propTypes.string.isRequired
}

Button.defaultProps = {
    name: 'empty'
}

export { Button }