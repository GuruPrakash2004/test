import UserCard from "./UserCard";


const peopleToFollow = [
  { name: "Alena Gouse", following: false },
  { name: "Ruben Bator", following: true },
  { name: "Aspen Stanton", following: false },
  { name: "Madelyn George", following: false },
];



const PeoplesToFollow = () => {

  return (

    <div className="shadow-lg bg-white p-4 rounded">
      <h1 className="text-xl font-bold">Peoples to follow</h1>
        {peopleToFollow.map((person,index)=> (<UserCard name={person.name} follow={person.following} index={index}/>))}
    </div>
  )
}

export default PeoplesToFollow