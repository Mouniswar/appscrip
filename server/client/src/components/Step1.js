import React from 'react';

const Step1 = (props) => {
    const saveAndContinue = (event) => {
        event.preventDefault();
        props.nextStep();
    }


    return(
        <form className="ui form">
            <div className="field">
                <label>First Name</label>
                <input
                placeholder='First Name'
                
                />
            </div>
            <button className="ui primary button" onClick={e => saveAndContinue(e)}>Next</button>
        </form>
    )
}

export default Step1;