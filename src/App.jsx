const learn = [
  {
    title: 'React',
    url: 'https://react.dev',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const List = () => (
  <ul>
    {learn.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.title}
          </a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input type="text" id="search" />
  </div>
);

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />

    <hr />

    <List />
  </div>
);

export default App;
