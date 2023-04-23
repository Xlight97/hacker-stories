const quote = 'React is AWESOME!';
const user = {
  name: 'Aldo',
  dogs: ['Putih', 'Pupi', 'Bruno', 'Mochi'],
};
const { name, dogs } = user;

function App() {
  return (
    <div>
      <h1>
        {name} is here and {quote}
      </h1>

      <ol>
        {dogs.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ol>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

export default App;
