import React from 'react';

const Step3 = (props) => {
    const submitButton = event => {
        event.preventDefault();

    }

    const prevButton = event => {
        event.preventDefault();
        props.prevStep();
    }

    return (
        <div className="ui form">
            Please Select Flag Colors(You can select multiple colors)
            <div class="inline field">
                <div class="ui checkbox">
                    <input type="checkbox" className="hidden" />
                    <label>White</label>
                </div>
            </div>
            <div class="inline field">
                <div class="ui checkbox">
                    <input type="checkbox" className="hidden" />
                    <label>Yellow</label>
                </div>
            </div>
            <div class="inline field">
                <div class="ui checkbox">
                    <input type="checkbox" className="hidden" />
                    <label>Orange</label>
                </div>
            </div>
            <div class="inline field">
                <div class="ui checkbox">
                    <input type="checkbox" className="hidden" />
                    <label>Green</label>
                </div>
            </div>
            <button className="ui primary button" onClick={e => prevButton(e)}>Previous</button>
            <button className="ui primary button" onClick={e => submitButton(e)}>Next</button>
        </div>
        
    )
}

export default Step3;