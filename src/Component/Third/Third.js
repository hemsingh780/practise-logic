import Section from "../Section/Section"
import classes from './Third.module.css'

const Third  = () =>{
  const style = {
      backgroundImage:'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/math_fundamentals-KD5NF3.png?width=92)',
      position: 'absolute',
      top: '4px',
      right: '4px',
      bottom: '4px',
      left: '4px',
      width: 'auto',
      height: 'auto',
      display: 'inline-block',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }
  const style2 = {
    backgroundImage:'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/cs_fundamentals-B2P79W.png?width=92)',
    position: 'absolute',
    top: '4px',
    right: '4px',
    bottom: '4px',
    left: '4px',
    width: 'auto',
    height: 'auto',
    display: 'inline-block',
   backgroundPosition: 'center',
   backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}

    return(

      <Section>
        <div className={classes.Third}>
            <div className={classes.divFirst}>
                <h5>Next Steps</h5>
                <div className={classes.divSecond}>
                   <a className={classes.firstA}> 
                   <span className={classes.img}>
                    <span style={style}></span>
                    </span>
                    <div className={classes.divThird}>
                    <h4>Mathematical Fundamentals</h4><p>The essential tools for mastering algebra, logic, and number theory!</p>
                    </div>
                    </a>
                    <a className={classes.secondA}> 
                    <span className={classes.img}>
                    <span style={style2}></span>
                    </span>
                    <div className={classes.divThird}>
                    <h4>Computer Science Fundamentals</h4><p>Wrap your mind around computational thinking, from everyday tasks to algorithms.</p>
                    </div>
                    </a>
                </div>
            </div>
        </div>
      </Section>
    )
}

export default Third