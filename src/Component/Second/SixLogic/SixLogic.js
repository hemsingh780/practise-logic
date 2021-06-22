import Card from "../../Card/Card"
import Making from "../Making/Making"
import { useState } from "react"

const SixLogic = () =>{

    const [state,setState] = useState({
        img:[
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Truth_Tables-fQehm6.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Basic_Logic_Gates-SuCIgu.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Combinations-wp6DqR.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Fredkin_Gates-B8FBqg.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Binary_Numbers_and_Addition-bJFOa8.png?width=280)',
            'url(https://ds055uzetaobb.cloudfront.net/brioche/chapter/Creating_a_Mechanical_Adder-yTzxMV.png?width=280)'
        ],
        name:[
            'Truth Tables',
            `Basic Logic Gates`,
            'Combinations',
            'Fredkin Gates',
            'Binary Numbers and Addition',
            'Creating a Mechanical Adder',

        ],
        detail:[
           `Diagram out the meanings of each logical operator.` ,
           'How do AND, OR, and NOT gates work?',
           `Combine gates together to make complex circuits.`,
           `Take a peek at a gate used in biological and quantum computing.`,
           `How does computer arithmetic work?`,
           `Use what you've learned about logic gates to create a circuit that adds numbers.`,
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
                value='6'
                headerTitle = 'Logic Machines'
                headerDetail = 'Turn logic into arithmetic machines. Collapse '
                card={card}
                /> 
            </>
        
            )

}

export default SixLogic