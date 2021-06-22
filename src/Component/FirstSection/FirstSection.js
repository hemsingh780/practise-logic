import classes from './FirstSection.module.css'
import Section from '../Section/Section'
import Left from './Left/Left'
import Right from './Right/Right'

const FirstSection = () => {
    return (

        <Section>
        <div className={classes.FirstSection}>
          <Left />
          <Right />
        </div>
        </Section>
    )
}


export default FirstSection