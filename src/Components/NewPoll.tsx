import { useEffect, useState } from "react";
import "../App.css";
import "../index.css";
import Footer from "./Footer";

const NewPoll = () => {
  const [answers, setAnswers] = useState<string[]>([""]);
  const [question,setQuestion] = useState<string>('');
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    setButtonDisabled(answers.length < 3 || !question ? true : false);
  }, [answers,question]);

  const HandleQuestion = (event: {target: HTMLInputElement;}) => {
    setQuestion(event.target.value);
  }

  const HandleAnswer = (event: { target: HTMLInputElement; }) => {
    let answersCopy = [...answers];
    const targetId = Number(event.target.id)
    answersCopy[targetId]= event.target.value;
    if (targetId === answersCopy.length - 1) {
      answersCopy.push("");
    }
    setAnswers(answersCopy);
  };


  return (
    <>
      <form className={`lg:mt-40 bg-yellow-300 pb-4 lg:mx-auto lg:w-1/2`}method="POST" action="/createpoll">
        <input
          className={` text-lg pt-8 font-bold placeholder-gray-500 bg-yellow-300 outline-none w-full block`}
          type="text"
          name="question"
          placeholder="Type your question"
          onChange={HandleQuestion}
          value={question}
        />
        <hr />
        {answers.map((answer, index) => (
          <input
            type="text"
            placeholder="Enter answer here"
            onChange={HandleAnswer}
            key={index}
            id={String(index)}
            name="answers"
            value={answer}
            className={`font-sans text-lg placeholder-gray-500 pt-8 bg-yellow-300 border-b-2 outline-none mx-auto block w-full  lg:mx-auto`}
          />
        ))}
        <button
          type="submit"
          disabled={answers.length < 3 ? true : false}
          className={` ${
            buttonDisabled
              ? "bg-gray-200 hover:bg-gray-400 border-gray-400 text-black"
              : "bg-blue-500 hover:bg-blue-700 border-blue-700 text-white"
          }  flex  text-lg justify-center mx-auto w-40 font-bold mt-5 py-2 px-4 border  rounded`}
        >
          Create Poll
        </button>
      </form>
      <Footer />
    </>
  );
};

export default NewPoll;
