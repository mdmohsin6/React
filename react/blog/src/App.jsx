import User from "./User";

function App(){
  const userData = [
    {
      name:"Mohsin",
      age:23,
      email:"mdmohsin35@gmail.com",
      id:1
    },
      {
      name:"sin",
      age:23,
      email:"mdmohsin5@gmail.com",
      id:2
    },
      {
      name:"Moh",
      age:23,
      email:"mdmohsin3@gmail.com",
      id:3
    },

  ]
  return (
    <div>
  {
    userData.map((user)=>(
      <div key= {user.id}>
      <User data= {user}/>
      </div>
    ))
  }
    </div>
  )
}
export default App;