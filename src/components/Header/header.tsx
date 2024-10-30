import Logo from '../../assets/logo/logo.svg';

const Header = () => {
    return (
        <div className="py-10">
            <img src={Logo} alt="Noventiq Logo" className="w-2/4 mx-auto" />
        </div>
    );
  }
  
  export default Header;
  