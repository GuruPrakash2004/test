import { useState } from "react";
import img1 from "../assets/react.svg"

function Grid(props){
     let content = props.content;
    const [isShow,setIsShow] = useState(false);
    //for count 
    
    const [count,setCount] = useState(0);

    function isToggle(){
        setIsShow((item)=> !item);
    }


    function Add(){
        setCount((number)=> number+1);
    }

   

    return(<>
        <div className="card ">
            <img className="card-img-top img-thumbnail" src={props.image} alt="" />
            <div className="card-body">
                <h3 className="card-title">
                    {props.title}
                </h3>
                <p onClick={()=>isToggle()} className="card-text">{isShow?content:"click to see content"}</p>

                <button className="btn btn-outline-danger" onClick={() => props.del(props.title)}> 
                    Delete
                </button>
                <br />
                <button className="count-btn btn btn-outlinw btn-sm m-3 btn-info" onClick={Add}>Add</button>
                <p className="count">{count}</p>
            </div>

        </div>

    </>)
}


export default Grid;