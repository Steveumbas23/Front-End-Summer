import Evolution from "./Evolution";
import Logocard from "./LogoCard";
import Effect from "./TypeEffect";

const Card = () => {
  const card_info = "Card Info";
  return (
    <div className="card-info-container">
      <h2>{card_info}</h2>
      <Logocard />
      <Effect />
      <Evolution />
    </div>
  );
};

export default Card;
