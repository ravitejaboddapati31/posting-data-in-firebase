import { useContext } from "react";
import ScoreContext from "./ScoreContext";

const Display = () => {

    const val = useContext(ScoreContext);

    return <div>
                The Score is
                <b className="text-success bg-primary">{val}</b>
            </div>
}

export default Display;