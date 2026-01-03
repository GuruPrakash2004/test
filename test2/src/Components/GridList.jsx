import img1 from "../images/courses/img1.jpeg";
import img2 from "../images/courses/img2.jpeg";
import img3 from "../images/courses/img1.jpeg";
import img4 from "../images/courses/img2.jpeg";
import reg from "../assets/react.svg"
import Grid from "./Grid";
import { useState } from "react";





function GridList() {



    const [list,setList] = useState([
        {image : reg ,
        title : "guru" ,
        content :"lorem1"
    },
  {
    
    image: img1,
    title: "GURU",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ex.",
  },
  {
    
    image: img2,
    title: "HARI",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  },
  {
    
    image: img3,
    title: "JAVA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  },
  {
    
    image: img4,
    title: "RAMA",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  }
]);

function handelDelete(title){
    let delItem = list.filter((item)=> item.title != title)
    setList(delItem);
}

let MapList = list.map((listItem) => <Grid image = {listItem.image} title = {listItem.title} content= {listItem.content} del ={handelDelete}/>)


return(<>
        {MapList}
</>)


}



export default GridList;