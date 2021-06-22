
import Card from "../../Card/Card"
import Making from "../Making/Making"
import { useState } from "react"

const FourMulti = () => {

    const [state,setState] = useState({
        img:[
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Perfect_Information-mqTyGs.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors-5jioSi.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Hat_Colors_with_More_People-96NuCs.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Red-Eyed_Dragons-v4T9FK.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Pirates-mMDacg.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves-vNOTMQ.png?width=280)'
        ],
        name:[
            'Perfect Information',
            'Hat Colors',
            'Hat Colors with More People',
            'Red-Eyed Dragons',
            'Logical Pirates',
            'Knights and Knaves'
        ],
        detail:[
           `If everyone follows the same logic, can you find out what they know?` ,
           'Can you figure out who can figure out the color of their hat?',
           `What happens to hat puzzles when there are more hats and more people?`,
           `Exactly how much can you learn from no one knowing anything?`,
           `Beware! Every pirate is as logical, greedy, and cutthroat as every other pirate.`,
           `Solve classic truthteller-liar puzzles where someone else knows the answer.`,
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
                value='4'
                headerTitle = 'Multi-Level Thinking'
                headerDetail = 'If you know that I know that you know... what then? Collapse'
                card={card}
                /> 
            </>
        
            )
}

export default FourMulti