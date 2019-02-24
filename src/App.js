import React from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';


class App extends React.Component {
    render() {
        return (
            <div>
                <Title />
                <Form />
                <Weather />
            </div>
        )
    }
};

export default App;