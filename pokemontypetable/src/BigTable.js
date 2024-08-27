import BigTableRow from './BigTableRow.js'
import './type.css';

function BigTable() {
    const types = ['normal', 'fire', 'water', 'grass', 'elec', 'ice', 'fight', 'poison', 'ground', 'flying','esper', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy' ];

    return(
        <table>
            <thead>
                <tr>
                { types.map((String, type) => (
                    <th className={types[type]}>{types[type]}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody>
                { types.map((String, type) => (
                    <BigTableRow attackType={type}/>
                    ))
                }      
            </tbody>
        </table>
    )
}

export default BigTable;