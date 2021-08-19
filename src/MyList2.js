import React, { useRef, useEffect } from 'react';


function MyList2() {
    //console.log("MyList2")
    //const listRef = useRef([]);
    let [value, setValue] = React.useState ('')    
    let [listed, setListed] = React.useState ([]) 

    const myChangeHandler = (event) => {
        setValue(event.target.value)
    };

    const mySubmitHandler = (event) => {
        //console.log("mySubmitHandler")
        event.preventDefault();
        //listRef.current.push(value)
        setListed([...listed, value])
    };

    let mlist = listed
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
  
  export default MyList2;