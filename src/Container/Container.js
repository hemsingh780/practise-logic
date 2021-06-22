import classes from './Container.module.css'
import  FirstSection from '../Component/FirstSection/FirstSection'
import Header  from '../Component/Header/Header'
import Second from '../Component/Second/Second'
import Third from '../Component/Third/Third'


const Container = () => {
   return(
       <div className={classes.Container}>
         <Header />
         <FirstSection />
         <Second />
         <Third />
       </div>
   )
}

export default Container