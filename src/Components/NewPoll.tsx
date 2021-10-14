import { useState } from "react";

const NewPoll = () => {
  const [answers, setAnswers] = useState<string[]>([""]);
  const HandleAnswer = (event: any) => {
      let answersCopy = [...answers]
      answersCopy[event.target.id] = event.target.value;
      if(Number(event.target.id) === answersCopy.length -1) {
          answersCopy.push("");
      }

    console.log(event);
    setAnswers(answersCopy)
    
  };
  console.log(answers);
  return (
    <form>
      <input type="text" name="question" placeholder="Type your question" />
      <hr />
      {answers.map((answer, index) => (
        <input
          type="text"
          placeholder="Enter answer here"
          onChange={HandleAnswer}
          key={index}
          id={String(index)}
          value={answer}
        />
      ))}
    <button disabled={answers.length < 3 ? true : false} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}>Create</button>
    </form>
  );
};

export default NewPoll;
