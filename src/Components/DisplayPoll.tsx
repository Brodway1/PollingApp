import { useEffect, useState } from "react";

const DisplayPoll = ({
  match: {
    params: { id },
  },
}: any) => {
  const [data, setData] = useState<any>([{question: '', answers: {answer: '', votes: 0}, isLoading: true}]);
  const pollId = parseInt(id);

  useEffect(() => {
    fetch(`http://localhost:5000/poll/${pollId}`)
      .then((response) => response.json())
      .then((data) => setData({question: data.question, answers: data.answers, isLoading: false}) )
  }, [pollId]);
  return (
    <div>
        {data.question}
        {data.isLoading === false ? data.answers.map((item: any) =><div>Answer: {item.answer}Votes:{item.votes} </div>) : "Loading"}
    </div>
  );
};

export default DisplayPoll;
