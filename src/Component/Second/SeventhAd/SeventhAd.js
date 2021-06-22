import Card from "../../Card/Card"
import Making from "../Making/Making"
import { useState } from "react"

const SeventhAd = () => {
    const [state,setState] = useState({
        img:[

            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Indirection-PZKKoF.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Knights_and_Knaves_En_Masse-7DRnSV.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Jokers-wSQW6c.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Humans_and_Vampires-zhcWOo.png?width=280',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Challenges-o42cgt.png?width=280',

        ],
        name:[
            'Indirection',
            `Knights and Knaves En Masse`,
            'Jokers',
            'Other Variations',
            'Humans and Vampiress',
            'Challenges'
        ],
        detail:[
           `Can you trick a liar into telling you the truth?` ,
           'What happens when you try to do logic at a big island party?',
           `Solve tricky variants of knights and knaves puzzles where some residents can behave like either.`,
           `Twist your mind around these unusual variants.`,
           `Now there are four types of island resident: can you still work out the truth?`,
           `Challenge yourself with our hardest selection of logic puzzles.`
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
                value='7'
                headerTitle = 'Advanced Knights and Knaves'
                headerDetail = 'Uncover liars on this island of logic! Collapse'
                card={card}
                /> 
            </>
        
            )

}

export default SeventhAd