// Создай компонент, который содержит поле ввода пароля и показывает уровень силы пароля
// (слабый, средний, сильный) в зависимости от длины и сложности пароля.
// Критерии и уровни сложности выбирайте сами. Обязательно использовать useState.
import React, { useState, useEffect } from "react";

function PasswordInput({ password, onChangePassword }) {
  const [strength, setStrength] = useState(null);
  useEffect(() => {
    if (password.length >= 1 && password.length < 3) {
      setStrength("weak");
    } else if (password.length >= 3 && password.length < 6) {
      setStrength("middle");
    } else {
      setStrength("strong");
    }
  }, [password.length]);
  console.log(password);
  function handleChangePassword(event) {
    onChangePassword(event.target.value);
  }
  return (
    <>
      <input name="password" value={password} onChange={handleChangePassword} />
      {password && <label htmlFor="password">{strength}</label>}
    </>
  );
}
function FormCode() {
  const [password, setPassword] = useState("");
  return (
    <div>
      <h3 style={{ color: "red" }}>Open your account</h3>
      <form>
        <PasswordInput password={password} onChangePassword={setPassword} />
        <button style={{ color: "blue", backgroundColor: "green" }}>
          enter your password !
        </button>
      </form>
    </div>
  );
}

export default FormCode;
