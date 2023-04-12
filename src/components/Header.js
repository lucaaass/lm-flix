
import { AiFillHome} from "react-icons/ai";
import { IoMdContact} from "react-icons/io";


import './Header.css'
function Header() {
    return (
   <div className='menu-header'>        
      <div className='logo'>
   <h2>LMFLIX</h2>
      </div>
      <div className='menu'>
        <li ><a href='/'><AiFillHome /></a></li>
        <li ><a href='/'>Séries</a></li>
        <li ><a href='/'>Filmes</a></li>
        <li ><a href='/'>Minha lista</a></li>
        
      </div>
                <div className='conta'>
                    <div>
                        <label for="search"></label>
                        <input type="search" id="search" name="search " />

                        <button>Search</button></div>
                    <div> <IoMdContact />  </div>

                </div>
      </div> 
      
    );
  }

  export default Header;