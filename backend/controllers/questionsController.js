const pool = require('../models/db');

exports.getQuestionsByType = async (req, res) => {
  const { type } = req.params;

  try {
    const query = `
      SELECT id, question_text, sql_query
      FROM questions
      WHERE target_entity = $1;
    `;
    const result = await pool.query(query, [type]);
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching questions:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getQuestionDetails = async (req, res) => {
  const { id } = req.params;

  try {
    const questionQuery = `
      SELECT sql_query
      FROM questions
      WHERE id = $1;
    `;
    const questionResult = await pool.query(questionQuery, [id]);

    if (questionResult.rows.length === 0) {
      return res.status(404).json({ error: 'Question not found' });
    }

    const sqlQuery = questionResult.rows[0].sql_query;
    const dataResult = await pool.query(sqlQuery);
    res.json(dataResult.rows);
  } catch (err) {
    console.error('Error executing question query:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
