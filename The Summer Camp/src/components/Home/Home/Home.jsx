import { Helmet } from "react-helmet-async";
import Slider from "./Slider";
import PopulaInstructors from "./PopulaInstructors";
import PopularClass from "./PopularClass";
import WebSummer from "../../Shared/WebSummer/WebSummer";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>The Summer Camp || Home</title>
            </Helmet>
            <WebSummer></WebSummer>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopulaInstructors></PopulaInstructors>
        </div>
    );
};

export default Home;