import { useState } from "react"




const App = () => {

  const anecdotes = [
    "Im not a great programmer, I'm just a good programmer with great habits",
    "Good programmers know what to write. Great ones know what to rewrite and reuse ",
    "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter",
    "Software and cathedrals are much the same; first we build them, then we pray",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand",
    "Good programmers use their brains, but good guidelines save us having to think out every case",
    "The best performance improvement is the transition from the nonworking state to the working state.",
    "A computer lets you make more mistakes faster than any other invention with the possible exceptions of handguns and Tequila",
    "There are only two kinds of languages: the ones people complain about and the ones nobody uses",
    "Optimism is an occupational hazard of programming: feedback is the treatment.",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    "Some people, when confronted with a problem, think “I know, I’ll use regular expressions.” Now they have two problems.",
    "Don’t comment bad code — rewrite it."
  ]

  const [selected, setSelected] = useState(null)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const getRandNum = () => {
    let randNum = Math.floor(Math.random() * (anecdotes.length))
    setSelected(randNum)
  }
  
  let v = (selected === null) ? null : 'votes'

  return (
    <div>
      <h1>Anecdote</h1>
      <p>{anecdotes[selected]}</p>
      <p>{votes[selected]} {v}</p>
      <button onClick={getRandNum}>Randomize</button>
      <button onClick = {() => setVotes({...votes, [selected]: votes[selected] += 1})}>Vote</button>
    </div>
  )
}

export default App;
