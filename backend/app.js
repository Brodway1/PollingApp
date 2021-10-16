const express = require('express')
const pool = require("./db")

const app = express()
const port = 5000

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//CREATE POLL
app.post('/createpoll', async (req, res) => {
    let question = req.body.question;
    let answers = req.body.answers;
    if(!question || answers.length < 3) return;
    answers = answers.filter(answer => answer)
    await pool.query('BEGIN')
    try {
    const insertPoll = `INSERT INTO poll(question) VALUES($1) RETURNING id`
    const response = await pool.query(insertPoll, [question]);
    for (const answer of answers) {
      let insertAnswerQuery = `INSERT INTO answers(poll_id,answer,votes) VALUES ($1, $2, 0)`
      let insertAnswerValue = [response.rows[0].id, answer]
      await pool.query(insertAnswerQuery, insertAnswerValue);
    }
    await pool.query('COMMIT');
  }
catch (err) {
    await(pool.query('ROLLBACK'));
    console.log(err);
  }

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})