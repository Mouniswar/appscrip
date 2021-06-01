import React, { useState } from 'react';
import axios from 'axios';
import history from '../history';

const MainForm = () => {
    const [form, setForm] = useState({
        username: "",
        cricketer: "",
      })
      const [count, setCount] = useState(1);
      const [flagcolor, setFlagColor] = useState([]);
    
      const updateForm = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
    
      const handleCheckboxes = (event) => {
        console.log("function triggered");
        console.log(flagcolor);
        const target = event.target;
        var value = target.value;
            
        if(target.checked){
          flagcolor[value] = value;   
        }else{
            flagcolor.splice(value, 1);
        }
      }

      const submitValues = async() => {
          const response = await axios.post('http://localhost:3003/trivias', {...form});
          console.log(response);
          if(response.status === 200) {
              history.push('/history');
          }
      }
    
      return (
        <div className="App">
          <h1>Step {count} of 3</h1>
          <form
            className="ui form"
            onSubmit={() =>
              alert(
                `Submitted Email: ${form.username} Name: ${form.cricketer} Password: ${flagcolor.map((color) => color)}`
              )
            }
          >
            {/* loads the 1st page */}
            {count === 1 ? (
              <div className="field">
                <label>Please Enter your Name</label>
                <input
                  type="text"
                  name="username"
                  onChange={updateForm}
                  value={form.username}
                />
              </div>
            ) : null}
    
              {/* loads the 2nd Page */}
            {count === 2 ? (
              <div className="grouped fields">
                <label htmlFor="cricketer">Please Select your Favourite cricketer</label>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="cricketer" value="Sachin Tendulkar" onChange={updateForm}/>
                            <label>Sachin Tendulkar</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="cricketer" value="Virat kohli" onChange={updateForm} />
                            <label>Virat kohli</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="cricketer" value="Adam Gilchirst" onChange={updateForm} />
                            <label>Adam Gilchirst</label>
                        </div>
                    </div>
                    <div className="field">
                        <div className="ui radio checkbox">
                            <input type="radio" name="cricketer" value="Jacques Kallis" onChange={updateForm} />
                            <label>Jacques Kallis</label>
                        </div>
                    </div>
              </div>
            ) : null}
    
            {/* Loads the 3rd Page */}
            {count === 3 ? (
             <div className="ui form">
             Please Select Flag Colors(You can select multiple colors)
             <div className="inline field">
                 <div className="ui checkbox">
                     <input type="checkbox"name="flagColor" value="White" onClick={e => handleCheckboxes(e)} />
                     <label>White</label>
                 </div>
             </div>
             <div className="inline field">
                 <div className="ui checkbox">
                     <input type="checkbox" name="flagColor" value="Yellow" onClick={e => handleCheckboxes(e)} />
                     <label>Yellow</label>
                 </div>
             </div>
             <div className="inline field">
                 <div className="ui checkbox">
                     <input type="checkbox" name="flagColor" onClick={e => handleCheckboxes(e)} value="Orange" />
                     <label>Orange</label>
                 </div>
             </div>
             <div className="inline field">
                 <div className="ui checkbox">
                     <input type="checkbox" name="flagColor" onClick={e => handleCheckboxes(e)} value="Green" />
                     <label>Green</label>
                 </div>
             </div>
         </div>
            ) : null}
            {count === 3 ? (
              <button className="ui button primary" type="submit" onClick={submitValues}>
                Submit
              </button>
            ) : null}
          </form>
          <button
            className="ui button secondary"
            type="submit"
            onClick={() => setCount(count - 1)}
            disabled={count < 2}
          >
            Back
          </button>
          <button
            className="ui button primary"
            type="submit"
            onClick={() => setCount(count + 1)}
            disabled={count > 2}
          >
            Next
          </button>
        </div>
      )
}

export default MainForm;