import { useState} from 'react'


const Statistics = (props) => {
    if(props.pos === 0 && props.neutral === 0 && props.neg === 0) {
        return (
            <div>
                <h2>Statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    }
        return (
            <div>
                <h2>Statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text = 'Good' value = {props.pos}/>
                        <StatisticLine text = 'Neutral' value = {props.neutral}/>
                        <StatisticLine text = 'Negative' value = {props.neg}/>
                        <StatisticLine text = 'All' value = {props.all}/>
                        <StatisticLine text = 'Average' value = {props.avg / props.all}/>
                        <StatisticLine text = 'Positive' value = {((props.pos / props.all) * 100) + ('%')}/>
                    </tbody>
                </table>
            </div>
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Button = (props) => {
    return (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
    )
}

const App = () => {
    const [feedback, setFeed] = useState({
        pos: 0, neutral: 0, neg: 0, all: 0, avg: 0
    })

    const handlePos = () => {
        setFeed({...feedback, pos: feedback.pos + 1, all: feedback.all + 1, avg: feedback.avg + 1})
    }
    const handleNeutral = () => {
        setFeed({...feedback, neutral: feedback.neutral + 1, all: feedback.all + 1})
    }
    const handleNeg = () => {
        setFeed({...feedback, neg: feedback.neg + 1, all: feedback.all + 1, avg: feedback.avg - 1})
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handlePos} text='Positive' />
            <Button handleClick={handleNeutral} text='Neutral' />
            <Button handleClick={handleNeg} text='Negative' />
            <Statistics pos = {feedback.pos} neutral = {feedback.neutral} neg = {feedback.neg} all = {feedback.all} avg = {feedback.avg}/>
        </div>
    )
}


export default App
