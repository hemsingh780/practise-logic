import classes from './Section.module.css'

const Section = (props) => {
    return <section className={classes.Section}>{props.children}</section>
}

export default Section