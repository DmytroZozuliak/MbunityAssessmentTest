import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <main className="container">
        <h1>Main</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis quaerat voluptate
          cupiditate, nihil unde saepe odio molestias animi nam ut, dolores delectus iusto. Magnam
          obcaecati officia, eum tempore quasi quae?
        </p>
      </main>
      <footer className="container">
        <p>Footer</p>
      </footer>
    </>
  );
}

export default App;
