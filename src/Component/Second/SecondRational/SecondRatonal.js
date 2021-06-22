import Making from '../Making/Making'
import { useState } from 'react'
import Card from '../../Card/Card'
const SecondRational = () => {

    const [state,setState] = useState({
    img:[
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Riddles_of_Order-uVO6uP.png?width=280)',
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Crafty_Counting-MyeNyB.png?width=280)',
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Mystery_Containers-jce39Z.png?width=280)',
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Futoshiki-bNVmO9.png?width=280)',
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Shuffles-GgH8Ox.png?width=280)',
        'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/False_Information-WRykiD.png?width=280)'
    ],
    name:[
        'Riddles of Order',
        'Crafty Counting',
        'Mystery Containers',
        'Futoshiki',
        'Shuffles',
        'False Information'
    ],
    detail:[
       'What order do these racers finish in?' ,
       'Learn strategies for counting that go far beyond just counting.',
       `What's in each of these mystery boxes?`,
       `Arrange the numbers to match the inequalities.`,
       `Where did everything get shuffled to?`,
       `Solve problems where the people giving you hints might be lying.`
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
            value='2'
            headerTitle = 'The Rational Detective'
            headerDetail = 'Eliminate the impossible and uncover the truth! Collapse'
            card={card}
            /> 
        </>
    
        )
}

export default SecondRational