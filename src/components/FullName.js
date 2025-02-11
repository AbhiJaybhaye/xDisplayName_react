import { useState } from "react";

const FullName = () => {
  const [formData, setFormData] = useState({
    first: "",
    last: "",
  });
  const [fullName, setFullName] = useState("");
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.first === "" || formData.last === "") {
      setFormError(true);
      setFullName("");
      return;
    }

    setFullName(`${formData.first} ${formData.last}`);
    setFormError(false);
    setTimeout(() => {
      setFormData({
        first: "",
        last: "",
      });
    }, 100);
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="first"
          id="firstName"
          value={formData.first}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="last"
          id="lastName"
          value={formData.last}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit" style={{ marginLeft: 75, marginTop: 10 }}>
          Submit
        </button>
        {formError && (
          <p style={{ color: "red", margin: "5px 5px" }}>
            Please enter both First and Last Names.
          </p>
        )}
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
};

export default FullName;
