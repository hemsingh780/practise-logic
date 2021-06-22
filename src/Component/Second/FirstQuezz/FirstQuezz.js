import classes from './FirstQuezze.module.css'
import Making from '../Making/Making'
import Card from '../../Card/Card'
import { useState } from 'react'

const FirstQuezz = () => {
    const [state,setState] = useState({
        img:[
           'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Warmup_Puzzles-T6zgwD-6TgfYy.png?width=280)',
           'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth-Seeking-c83EPA.png?width=280)',
           'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Machine_Logic_and_Strategy-jrTuIK-2FIeRk.png?width=280)'
        ],
        name:[
            'Warmup Puzzles',
            'Truth-Seeking',
            'Strategic Deductions'
        ],
        detail:[
            'Get started with some logic warmups.',
            'Who or what is telling the truth?',
            `Stretch the information you're given as far as it can go!`
        ]
        
    })
const style = {
    display: 'flex',
    flex: 'none',
    width: '328px',
    marginRight: '32px',
    listStyle:'none'
}
    const card =  state.img.map((x,i)=>{
        return (
           <li key={i} style={style}>
           <Card 
           backgroundImage={x}
           name={state.name[i]}
           detail = {state.detail[i]}
           />
           </li>
       )
    })

    return(
    
    <>
        <Making 
        value='1'
        headerTitle = 'Introduction'
        headerDetail = 'Put your logic to the test with these warmups!'
        card={card}
        /> 
    </>

    )
}


export default FirstQuezz