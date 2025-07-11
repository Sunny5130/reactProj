// import { useEffect, useState } from "react";

// function Api() {
//   const [userdata, setUserdata] = useState([]);

//   useEffect(() => {
//     getUserdata();
//   }, []);

//   async function getUserdata() {
//     // const url = "https://dummyjson.com/users/";
//     const url = "http://localhost:5000/posts"; //own created api using json-server
    

//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setUserdata(response.users);
//   }

//   return (
//     <>
//       <h1>Fetch Data from API</h1>
//       {userdata.map((user,index) => (
//         <ul>
//             <li>
//                 {/* {user.id}, {user.firstName}, {user.age} */}
//                 <br /><br />
//             </li>
//         </ul>
        
//       ))}
//     </>
//   );
// }

// export default Api;


//-------------------------------------------------fetch and post own cretaed api---------------------------->>///
// import { useEffect, useState } from "react";

// function Api() {
//   const [userdata, setUserdata] = useState([]);

//   useEffect(() => {
//     getUserdata();
//   }, []);

//   async function getUserdata() {
//     const url = "http://localhost:5000/Admin"; // your local JSON server
//     let response = await fetch(url);
//     response = await response.json();
//     console.log(response);
//     setUserdata(response);
//   }

//   return (
//     <>
//       <h1>Fetch Data from API</h1>
//       {userdata.map((user, index) => (
//         <ul key={index}>
//           <li>{user.name}, Age: {user.age}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default Api;


import { useEffect, useState } from "react";
import "./Api.css";
// import Userlist from "./Userlist";

function Api() {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    getUserdata();
  }, []);

  async function getUserdata() {
    const url = "http://localhost:5000/Admin";
    let response = await fetch(url);
    response = await response.json();
    setUserdata(response);
  }

  return (

    <div>
      <h1 id="h">User Data</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Api;
