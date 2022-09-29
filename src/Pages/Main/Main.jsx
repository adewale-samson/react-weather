import "./Main.css";
import Form from "../../Components/Form/Form";

const Main = () => {
  return (
    <>
      <h1 className="weather-text">
        Seeing the weather of the whole world with <span className="text-span">Dark Weather!</span>
      </h1>
      <Form />
    </>
  );
};

export default Main;
