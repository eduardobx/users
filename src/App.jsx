import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import UsersForm from "./componets/UsersForm";
import UsersList from "./componets/UsersList";

function App() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState(null);
  const [value, setValue] = useState(false);
  const [cerrar, setCerrar] = useState(false);

  useEffect(() => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUser(res.data));
  }, []);

  const get = () => {
    axios
      .get(`https://users-crud1.herokuapp.com/users/`)
      .then((res) => setUser(res.data));
  };

  const addUser = (users) => {
    axios
      .post(`https://users-crud1.herokuapp.com/users/`, users)
      .then(() => get())
      .catch((error) => console.log(error.response.data));
  };

  const delet = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => get());
  };
  console.log(user);

  const uppload = (obj) => {
    setNewUser(obj);
  };

  const uppUser = (objUsers) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${newUser.id}/`, objUsers)
      .then(() => get());
      setNewUser(null)
  };

  return (
    <div className="App">
      {value ? (
        <div>
          <div className="close-users">
          <div   >   <h2 onClick={() =>setCerrar(false)}>users</h2> </div>
          
          <button className="close" onClick={() => setValue(false)}>Close Users</button>
</div>
          <UsersForm
            setNewUser={setNewUser}
            addUser={addUser}
            newUser={newUser}
            uppUser={uppUser}
            cerrar={cerrar}
            setCerrar={setCerrar}
          />
          <UsersList
            user={user}
            delet={delet}
            uppload={uppload}
            setCerrar={setCerrar}
          />
        </div>
      ) : (
        // <button > </button>

        <div  className="conteiner-use" >  <svg onClick={() => {setValue(true);
          cerrar & setCerrar(false)
        }
        } xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
      </svg>  <h2>Rgistrar Usuario</h2> </div>
      )}
    </div>
  );
}

export default App;
