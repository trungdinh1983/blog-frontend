import axios from "axios";

export function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name : <input name="name" type="text" />
        </div>
        <div>
          Email : <input name="email" type="text" />
        </div>
        <div>
          Password : <input name="password" type="password" />
        </div>
        <div>
          Password Confirmation : : <input name="password_confirmation" type="password" />
        </div>
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
}
