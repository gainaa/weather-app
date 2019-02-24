import React from 'react';
import Title from './components/Title/Title';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';

const API_KEY = 'ed6b65702865a551673ff4e404b087bd';

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
    }
    // tworzenie funkcji, która będzie korzystała z API
    // wykorzystanie async/await
    getWeather = async (e) => {
        // pozbycie się przeładowania strony
        e.preventDefault();
        // złapanie danych, które wpisujemy w formularz
        const city = e.target.elements.city.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
        // każda odpowiedź, którą otrzymamy od API ma być konwertowana do json
        const data = await api_call.json();
        this.setState({
            temperature: data.main.temp,
            city: data.name,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: '',
        });
        console.log(data);
    }
    render() {
        return (
            <div>
                <Title />
                <Form getWeather={this.getWeather} />
                <Weather />
            </div>
        )
    }
};

export default App;