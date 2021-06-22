
import classes from './Making.module.css'

const Making = (props) => {

    return(
     <li className={classes.parent}>
        <header className={classes.container}>
             <div className={classes.svg}>
               <span className={classes.Num}>{props.value}</span>
               <svg className={classes.realSvg} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-69f3b23e=""><path d="M32 16C32 28.5 20.8366 33 12 33C3.16344 33 0 22.8366 0 14C0 5.16344 8.16344 0 17 0C25.8366 0 32 7.16344 32 16Z" fill="#758bff" data-v-69f3b23e=""></path></svg>
             </div>
             <div className={classes.details}>
                <h3>{props.headerTitle}</h3>
                <p>{props.headerDetail}</p>
             </div>
        </header>
        <div className={classes.quezzes}>
        <div className={classes.quezzesContainer}>
        <ol className={classes.ol}>
              {props.card}
        </ol>
        </div>
        </div>
     </li>
    )

}

export default Making