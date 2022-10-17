import { useState } from 'react';
function App() {
  const [form, setform] = useState({
    amount: 0,
    description: '',
    date: " ",
  });

  function handleInput(e) {
    console.log();
    setform({ ...form, [e.target.name]: e.target.value })
  }
  //connection with BE starts
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:4000/transaction",
      {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "content-type": "application/json",
        }
      });

    //backend connection till here
    const data = await res.json();
    console.log(data);
  }
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <input
          type='number'
          name='amount'
          value={form.amount}
          onChange={handleInput}
          placeholder="Enter the amount" />
        <input
          type="text"
          name='description'
          value={form.description}
          onChange={handleInput}
          placeholder="Enter the Details" />
        <input
          type="date"
          name='date'
          value={form.date}
          onChange={handleInput} />

        <button type="submit"> Submit</button>

      </form>
    </div>
  );
}

export default App;