import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const Generations = () => {
  return (
    <div className="generations-container">
      <Gen1 />
      <Gen2 />
      <Gen3 />
      <Gen4 />
    </div>
  );
};

export default Generations;
