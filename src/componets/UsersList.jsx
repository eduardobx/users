import React from "react";

const UsersList = ({ user, delet, uppload, setCerrar }) => {
  return (
    <div className="conteiner">
      {user.map((userload) => (
        <ul key={userload.id} className="user-car">
        <div>
          <li className="title">
              {userload.first_name} {userload.last_name}
          </li>
          <li className="birtday">
           <h2> email :</h2>
            <h3>{userload.email}</h3>
          </li>
          <li className=" birtday">
            <h2>Birthday :</h2>  
            <h3>{userload.birthday}</h3>
          </li>
        </div>
        <div className=" conteiner-icons"><i onClick={() => delet(userload.id)} class="fa-solid fa-trash-can"></i>
        <i onClick={() => {
              uppload(userload);
              setCerrar(false);
            }}class="fa-solid fa-pen-to-square"></i></div>

        </ul>
      ))}
      
    </div>
  );
};

export default UsersList;
