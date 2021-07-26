import React from 'react';

const initialState = {data: []};

function reducer(state, action) {
  //console.log (action)
  switch (action.type) {
    case 'add':
      return {data: [...state.data, action.value]};
    default:
      throw new Error();
  }
}

function MyList() {
    //console.log("MyList")
    let [value, setValue] = React.useState ('')    
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const myChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const mySubmitHandler = (event) => {
        //console.log("mySubmitHandler")
        event.preventDefault();
        //console.log(value)
        dispatch({type: 'add', value: value})
    };

    //console.log(state)
    let mlist = state.data
    return (
      <div className="MyList">
            <h1>This is MyList Component</h1>
            <form>
                <p>Enter your value:</p>
                <input
                type="text"
                name="data"
                value={value}
                onChange={myChangeHandler}
                />
                <button onClick={mySubmitHandler}>
                    Submit
                </button>
            </form>
            <div>LIST</div>
            {mlist && mlist.length >0 && mlist.map ((l,index)=> { 
                return <div key ={index}> {l} </div>
            })}
      </div>
    );
  }
  
  export default MyList;