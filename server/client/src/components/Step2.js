import React from 'react';

const Step2 = (props) => {
    console.log(props)
    const nextButton = (event) => {
        event.preventDefault();
        props.nextStep();
    }
    const prevButton = (event) => {
        event.preventDefault();
        props.prevStep();
    }

    return (
        <form className="ui form">
            <div className="grouped fields">
                <label htmlFor="cricket">Please Select your Favourite cricketer</label>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio" name="cricket" className="hidden"  onChange={e => props.handleChange(e.target.value)}/>
                        <label>Sachin Tendulkar</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio" name="cricket" className="hidden"  onChange={e => props.handleChange(e.target.value)} />
                        <label>Virat kohli</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio" name="cricket" className="hidden"  onChange={e => props.handleChange(e.target.value)} />
                        <label>Adam Gilchirst</label>
                    </div>
                </div>
                <div className="field">
                    <div className="ui radio checkbox">
                        <input type="radio" name="cricket" className="hidden"  onChange={e => props.handleChange(e.target.value)} />
                        <label>Jacques Kallis</label>
                    </div>
                </div>
            </div>
                
            <button className="ui primary button" onClick={e => prevButton(e)}>Previous</button>
            <button className="ui primary button" onClick={e => nextButton(e)}>Next</button>
        </form>
    );
}

export default Step2;