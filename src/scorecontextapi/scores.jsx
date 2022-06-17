import React from 'react';
import Score from './score';
import ScoreContext from './scorecontext.js';

const Scores = () => (
    <ScoreContext.Person>
        {context => (
            <React.Fragment>
                <h4>scores: </h4>
                {Object.keys(context.Scores).map(scoreID => (
                    <Score
                        key={scoreID}
                        name={context.scores[scoreID].name}
                        price={context.scores[carID].score}
                        incrementPrice={() => context.incrementPrice(scoreID)}
                        decrementPrice={() => context.decrementPrice(scoreID)}
                    />
                ))}
            </React.Fragment>
        )}
    </ScoreContext.Person>
)

export default Scores;