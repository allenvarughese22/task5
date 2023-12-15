import "./App.css";

const names = ["Alice", "Bob", "Charlie", "David"];

function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1>
            The <em>Nintendo Entertainment System (NES)</em>
          </h1>
        </header>

        <div>
          <h2>List of Names of who have Nintendo:</h2>
          <ul>
            {names.map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
        </div>

        <section className="intro">
          <p>
            is an{" "}
            <strong>8-bit third-generation home video game console</strong>{" "}
            produced by <strong>Nintendo</strong>. It was first released in
            Japan in <time dateTime="1983">1983</time> as the{" "}
            <em>Family Computer (FC)</em>,<sup>[note 1]</sup> commonly referred
            to as{" "}
            <em>
              Famicom.<sup>[note 2]</sup>
            </em>
          </p>
          <p>
            It was redesigned to become the <em>NES</em>, which was released in{" "}
            <strong>
              American test markets on{" "}
              <time dateTime="1985-10-18">October 18, 1985</time>,
            </strong>{" "}
            and was soon fully launched in <strong>North America</strong> and
            other regions.
          </p>
        </section>

        <section className="history">
          <h2>History</h2>
          <p>
            After developing several successful arcade games in the early 1980s
            such as <em>Donkey Kong (1981)</em>, Nintendo planned to create a
            home video game console.
          </p>
          <p>
            Rejecting more complex proposals, the Nintendo president{" "}
            <strong>Hiroshi Yamauchi</strong> called for a simple, cheap console
            with games stored on cartridges.
          </p>
          <p>
            The controller design was reused from Nintendo's portable{" "}
            <em>Game & Watch</em> games. Nintendo released several add-ons, such
            as the <em>NES Zapper</em> light gun for shooting games like{" "}
            <em>Duck Hunt</em>.
          </p>
        </section>
      </div>
    </>
  );
}

export default App;
