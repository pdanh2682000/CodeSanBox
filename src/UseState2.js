import "./styles.css";
import { useState } from "react";

const dataRadios = [
  {
    id: "1",
    gender: "Male"
  },
  {
    id: "2",
    gender: "Female"
  }
];

const dataCheckboxes = [
  {
    id: "1",
    age: "10"
  },
  {
    id: "2",
    age: "20"
  },
  {
    id: "3",
    age: "30"
  }
];

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [radioChecked, setRadioChecked] = useState(2);
  const [checkboxData, setCheckboxData] = useState([]);

  const handleSubmit = () => {
    console.log(name, email);
  };

  //console.log(radioChecked);
  console.log(checkboxData);

  const changeData = () => {
    setName("change name");
    setEmail("change email");
  };

  const handleChangeCheckbox = (id) => {
    if (!checkboxData.includes(id)) setCheckboxData([...checkboxData, id]);
    else
      setCheckboxData((pre) => {
        return pre.filter((value) => value !== id);
      });
  };

  return (
    <div>
      <label>Name: </label>
      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        value={name}
      />
      {dataRadios.map((radio) => {
        return (
          <div key={radio.id}>
            <input
              type="radio"
              checked={radioChecked === radio.id}
              onChange={() => {
                setRadioChecked(radio.id);
              }}
            />{" "}
            <span>{radio.gender}</span>
          </div>
        );
      })}
      {dataCheckboxes.map((checkbox) => {
        return (
          <div key={checkbox.id}>
            <input
              type="checkbox"
              onChange={() => handleChangeCheckbox(checkbox.id)}
            />
            <span>{checkbox.age}</span>
          </div>
        );
      })}
      <label>Email: </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        name="email"
        value={email}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={changeData}>Change data</button>
    </div>
  );
}
