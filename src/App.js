import { useState } from "react";


function App() {

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [age, setAge] = useState(0);
  const [user, setUser] = useState([]);


  return (
    <>
      <div className="container">
         <form>
          <div style={{marginTop: "50px"}}>
              <label htmlFor="name">Name</label> <br/>
              <input onChange={(e)=>setName(e.target.value)} value={name} style={{width: "20%"}} className="form-control" id="name" name="fname" placeholder="name..." type="text" required/>
            </div>
            <div>
              <label htmlFor="surname">Surname</label> <br/>
              <input onChange={(e)=>setSurName(e.target.value)} value={surname} style={{width: "20%"}} className="form-control" id="surname" name="sname" placeholder="surname..." type="text" required/>
            </div>
          <div>
            <label htmlFor="age">Age</label> <br/>
            <input onChange={(e)=>setAge(e.target.value)} value={age} style={{width: "20%"}} className="form-control" id="age" name="age" placeholder="age..." type="number" min="0" required/>
          </div>
          <button
           onClick={(e) => 
          {
            console.log('name:', name);
            if (name==="") {
                alert("name is required!")
                return;
            }
            if (surname==="") {
              alert("surname is required!")
              return;
            }
            if (age===0) {
              alert("age is required!")
              return;
            }
            else{
              e.preventDefault();
              setUser([...user,{name:name,surname:surname,age:age}])
              setName("")
              setSurName("")
              setAge(0)
            }
          }}  
          className="btn btn-primary" style={{marginTop: "30px"}} type="submit">Add User</button>
         </form>

         {/* My Table */}
          <table style={{marginTop: "25px"}} className="table table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item,key) =>(
                  <tr key={key}>
                  <th scope="row">{key+1}</th>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.age}</td>
                </tr>
                )
              )
              }
           
            </tbody>
            </table>
      </div>
    </>
  );
}

export default App;
