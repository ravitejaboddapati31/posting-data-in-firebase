import Display from "./display";
import ScoreContext from "./ScoreContext";


const Score = () =>(
    <ScoreContext.Provider value={23}>
        <div>
            <Display />
        </div>
    </ScoreContext.Provider>
)

export default Score;