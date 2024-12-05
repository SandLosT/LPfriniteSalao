import * as React from 'react';
import Button from '@mui/material/Button';
import Style from "./Header.module.css"

function Nav() {
    
    return (
      
        <section>
          
          <a className={Style.header}src={""}>LOGO</a>
          <div className={Style.menu}>
            <Button color="secondary">Serviços</Button>
            <Button color="secondary">Sobre Nós</Button>
            <Button color="secondary">Contato</Button>
          </div>
        </section>

   );
}
export default Nav;