import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const home = "home";

  return (
    <div className="home">
      <div className="home-container">
        <div className="search-container">
          <Search />
        </div>

        <h1>{home}</h1>

        <Card />
      </div>
    </div>
  );
};

export default Home;
