import classes from './Header.module.css'

const Header = () => {

    return(
        <>
       <header className={classes.Header}>
           <div className={classes.container}>
               <nav className={classes.nav1}>
                  <ul className={classes.nav}>
                    <li><span>logo</span>BRILLIANT</li>
                    <li>TODAY</li>
                    <li className='active'>COURSES</li>               
                    <li>PRACTISE</li>               
                  </ul> 
               </nav>
               <div className={classes.btn}>
                  <button>Log in</button>
                  <button>Sign up</button>
               </div>
           </div>
      </header>
        </>
    )

}

export default Header