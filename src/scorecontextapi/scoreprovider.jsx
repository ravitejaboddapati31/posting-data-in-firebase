import React from "react";
import ScoreContext from "./scorecontext";


class ScoreProvider extends Component {
    state = {
        scores: {
            score001: { name: 'raviteja', score: 55 },
            score002: { name: 'teja', score: 65 },
            score003: { name: 'pavankumar', score:80 }
        }
    }
    render() {
        return (
            <ScoreContext.Provider
                value={{
                    scores: this.state.scores,

                    incrementPrice: selectedID => {
                        const scores = Object.assign({}, this.state.scores);
                        scores[selectedID].score = scores[selectedID].score + 10;
                        this.setState({
                            scores
                        });
                    },
                    
                    decrementPrice: selectedID => {
                        const scores = Object.assign({}, this.state.scores);
                        scores[selectedID].score = scores[selectedID].score - 10;
                        this.setState({
                            scores
                        });
                    }
                }}
            >
                {this.props.children}
            </ScoreContext.Provider>)
    }
}

export default ScoreProvider;