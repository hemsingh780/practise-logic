import { classExpression } from '@babel/types'
import classes from './Right.module.css'

const Right = () => {
    return (
        <>
     <div className={classes.Right}>
         <div className={classes.img}><span className={classes.SpanImg}></span></div> 
         <div className={classes.secondDiv}> 
            <div className={classes.one}>   
             <h3> Interactive <br /> quizzes</h3> 
             <span>37</span>
            </div> 
             <div className={classes.two}><h3>Concepts and <br /> exercises</h3>
             <span>265+</span></div>
        </div> 
           <button>Start Course</button>
     </div>
        </> 
    )
}


export default Right