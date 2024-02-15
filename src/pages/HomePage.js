import PLANETS from "../data/planets";
import PlanetList from "../components/PlanetList";

const HomePage = () => {
    return (
        <div className="container">
            <h1 className="text-center my-5">Planets</h1>
            <PlanetList planets={PLANETS} />
        </div>
    );
};

export default HomePage;