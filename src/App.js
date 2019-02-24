import React from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = 'ed6b65702865a551673ff4e404b087bd';

class App extends React.Component {
    // tworzenie funkcji, która będzie korzystała z API
    // wykorzystanie async/await
    getWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Bardo,PL&       appid=${API_KEY}&units=metric`);
        // każda odpowiedź, którą otrzymamy od API ma być konwertowana do json
        const data = await api_call.json();

    }
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