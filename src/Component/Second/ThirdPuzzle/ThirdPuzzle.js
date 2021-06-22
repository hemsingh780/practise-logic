import Card from "../../Card/Card"
import Making from "../Making/Making"
import { useState } from "react"
const ThirdPuzzle = () => {
   
    const [state,setState] = useState({
        img:[
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Werewolves-Jd2lIq.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Logical_Language-6tn9sJ.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/If_A_then_B.-vl28Kf.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Elimination_Grids-bpMmxt.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jigsaw_Map-qFUgaS.png?width=280)',
        ],
        name:[
            'Werewolves',
            'Logical Language',
            'If A, then B.',
            'Elimination Grids',
            'Jigsaw Map'
        ],
        detail:[
           `Who's a werewolf?'` ,
           'Explore the logical use of the words "and", "or", and "not".',
           `If you do this quiz, you will learn about sentences like this one.`,
           `Solve classic logic elimination puzzles.`,
           `Where do the pieces go on the map?`,
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
                value='3'
                headerTitle = 'Puzzles and Riddles'
                headerDetail = 'Even trickier puzzles and the tools you need to solve them. Collapse'
                card={card}
                /> 
            </>
        
            )
}


export default ThirdPuzzle