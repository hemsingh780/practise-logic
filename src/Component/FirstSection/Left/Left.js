import classes from './Left.module.css'
import {IoIosArrowBack} from 'react-icons/io'
const Left = () => {
    return(
      <div className={classes.Left}>
        <p className={classes.FirstP}><IoIosArrowBack /><span>Back to all courses</span></p>
        <h1 className={classes.FirstH1}>Logic</h1>  
        <h2 className={classes.FirstH2}>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h2>
        <div className={classes.secondDiv}>
        <p>The beginning of our introductory math journey 
        is Logic. Through these challenging problem solving exercises,
            you'll construct the critical thinking 
        skills that are the basis for mathematical reasoning. </p>
        <p>You'll use limited information to make predictions – eliminating the 
        impossible to uncover the truth. This 
        course builds up to some truly mind-bending 
        challenges!
        <button>Read more<span></span></button></p>
        </div>
        <button className={classes.btn2}> View prerequisites and next steps</button>
      </div>
    )
}
 
export default Left