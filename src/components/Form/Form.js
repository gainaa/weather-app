import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name='city' placeholder='City name' />
                <button>Get Weather</button>
            </form>
        )
    }
};

export default Form;