import classes from './Card.module.css'

const Card = (props) => {
console.log(props)
   const style = {
       backgroundImage:props.backgroundImage,
       display: 'inline-block',
       width: '100%',
       height: '100%',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat',
       backgroundSize: 'contain'
   }

    return (
        <div classNam={classes.Card}>
            <div className={classes.img}>
              <span style={style}></span>
             </div>
             <div className={classes.text}>
               <h4>{props.name}</h4>
               <div>
                   <p>{props.detail}</p>
               </div>
             </div>
             <div className={classes.progress}>
             </div>
        </div>
    )
}

export default Card