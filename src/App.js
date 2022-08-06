import { useState } from "react";
import "./App.css";
import { FormInput } from "./components";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Login",
      errorMessage:"Nazwa użytkownika musi zawierać min 3 znaki",
      label: "Nazwa użytkownika",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Twój email",
      errorMessage:"Nieprawidłowy adres email",
      label: "E-mail",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "ttext",
      placeholder: "Mocne hasło",
      errorMessage:"Hasło musi skłądać się z cyfr, małych, wielkich liter oraz znaku specjalnego (6-20 znaków)",
      label: "Hasło",
      pattern: "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[-$@$!%*#?&])[a-zA-z0-9$@$!%*#?&-]{6,20}$",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Powierdź hasło",
      errorMessage:"Podałeś dwa różne hasła",
      label: "Potwierdź hasło",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()), "on Submit")
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Rejestracja</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Wyślij</button>
      </form>
    </div>
  );
}

export default App;
