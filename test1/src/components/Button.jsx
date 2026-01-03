function Button({setValue}){

    function INC(){
            setValue((prev)=> prev+1);
    }
    return(<>
    <button  className="btn btn-sm btn-primary mt-2" onClick={INC}>hi</button>
    </>)
}



export default Button;