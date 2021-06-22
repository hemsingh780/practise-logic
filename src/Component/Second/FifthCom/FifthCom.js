import Card from "../../Card/Card"
import Making from "../Making/Making"
import { useState } from "react"
const FifthCom = () => {
    const [state,setState] = useState({
        img:[
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate-2hzzdS.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Luk_Tsut_Ki-YkvdnC.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Puppies_and_Kittens-MyD5W8.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Poisoned_Chocolate_II-jCwMSc.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Game_Search_Algorithms-8CTK46.png?width=280)',
        ],
        name:[
            'Poisoned Chocolate',
            `Luk Tsut K'i`,
            'Puppies and Kittens',
            'Poisoned Chocolate II',
            'Game Search Algorithms',
        ],
        detail:[
           `Don't take the last chocolate!` ,
           'Find the complete solution to a classic game.',
           `Solve a fuzzier, livelier variant of the poisoned chocolate game.`,
           `What happens when the chocolate comes in rectangles?`,
           `Learn how simple AI systems approach game strategy.`,
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
                value='5'
                headerTitle = 'Competitive Games'
                headerDetail = 'What will your opponent do? Logic it out! Collapse'
                card={card}
                /> 
            </>
        
            )
}

export default FifthCom