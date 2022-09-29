import Button from "../Button/Button";
import "./Navbar.css";
import Dark from '../../Images/dark.svg'


const Navbar = () => {
  // const list = ["Home", "Download App", "Contact us"];
  return (
    <nav className="nav-flex">
      <span className="logo"><img src={Dark} alt="" /></span>
      <ul className="nav-container">
        {/* {list.map((item, i) => (
          <li className="nav-list" key={i}>{item}</li>
        ))} */}
        <li className="nav-list home">Home</li>
        <li className="nav-list app">Download App</li>
        <li className="nav-list contact">Contact us</li>
      </ul>
      <Button title={"Sign up"} />
      <span className="bar">&#9776;</span>
    </nav>

    // <nav className='flex-list'>
    //   <ul className='nav-container'>
    //     <li className='logo'>Dark Weather</li>
    //     <li>Home</li>
    //     <li>Download App</li>
    //     <li>Contact us</li>
    //     <li className='li-btn'>{<Button title={'Sign up'}/>}</li>
    //   </ul>
    // </nav>
  );
};

export default Navbar;
