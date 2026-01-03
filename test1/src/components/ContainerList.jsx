import img1 from "../images/courses/img1.jpeg";
import img2 from "../images/courses/img2.jpeg";
import img3 from "../images/courses/img1.jpeg";
import img4 from "../images/courses/img2.jpeg";
import Container from "./Container";
import { useState } from "react";



// var sortArr = list.sort((x, y) => x.rank - y.rank);




function ContainerList({ setValue }) {
    const  [list,setList] = useState([
  {
    rank: 3,
    image: img1,
    title: "HTML",
    desp: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, ex.",
  },
  {
    rank: 4,
    image: img2,
    title: "CSS",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  },
  {
    rank: 1,
    image: img3,
    title: "JAVA",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  },
  {
    rank: 2,
    image: img4,
    title: "JavaScript",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure?",
  },
]);

function handdelDelete(rank){
    console.log("deleted");
    var newList = list.filter((item) => item.rank != rank);
    setList(newList);
}

  var ListContent = list.map((items, index) => (
    <Container
      key={index}
      image={items.image}
      title={items.title}
      desp={items.desp}
      rank={items.rank}
      setValue={setValue}
      deleteData = {handdelDelete}
    />
  ));

  return <>{ListContent}</>;
}

export default ContainerList;
