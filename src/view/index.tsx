import * as React from 'react';

interface Props {
    saludo: string;
}

class App extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return <div>Hola {this.props.saludo}</div>
    }
}

export { App };