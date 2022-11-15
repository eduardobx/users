import React, { useEffect, useState } from "react";

const UsersForm = ({ addUser, newUser, uppUser, setCerrar, cerrar,setNewUser }) => {
  const [firtsName, setFirtsName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const [birthday, setBirthday] = useState("");

  useEffect(() => {
    if (newUser) {
      setBirthday(newUser.birthday);
      setFirtsName(newUser.first_name);
      setLastName(newUser.last_name);
      setEmail(newUser.email);
      setPasword(newUser.password);
    } else get();
  }, [newUser]);

  const addUsers = (e) => {
    e.preventDefault();

    const users = {
      email,
      password,
      first_name: firtsName,
      last_name: lastName,
      birthday: birthday,
    };

    if (newUser) {
      uppUser(users);
    } else {
      addUser(users);
    }
    get();
  };

  const get = () => {
    setBirthday("");
    setFirtsName("");
    setLastName("");
    setEmail("");
    setPasword("");
  };

  return (
    <form onSubmit={addUsers} className={cerrar ? "open" : "cerrar"}>
      <div>
        <div className="consteiner-name">
          <h1>New Users</h1>
          <svg onClick={() => {setCerrar(true)
          setNewUser(null)}
           }

            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-x-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </div>
        <ul>
          <li>
            <i></i> <label htmlFor="name"> firts Name</label>
            <input
              onChange={(e) => setFirtsName(e.target.value)}
              value={firtsName}
              type="text"
              id="name"
            />
            <label htmlFor="Lastname"> Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
              id="Lastname"
            />
          </li>
          <li>
            <label htmlFor="paswoord">Paswoord</label>
            <input
              onChange={(e) => setPasword(e.target.value)}
              value={password}
              type="passwoord"
              id="paswoord"
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>{" "}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
            />
          </li>
          <li>
            <label htmlFor="birthday"> Birthday</label>
            <input
              onChange={(e) => {
                setBirthday(e.target.value);
              }}
              value={birthday}
              type="date"
              id="birthday"
            />
          </li>
        </ul>
        <button className="load-user"> Add Users</button>
        
      </div>
    </form>
  );
};

export default UsersForm;
