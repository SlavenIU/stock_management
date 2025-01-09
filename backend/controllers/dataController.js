const pool = require('../models/db');

exports.getDataByType = async (req, res) => {
  const { type, id } = req.params;
  let query;

  try {
    if (type === 'article') {
      query = `
        SELECT a.name, a.price, a.description, s.name AS section_name
        FROM articles a
        JOIN sections s ON a.section_id = s.id
        WHERE a.id = $1;
      `;
    } else if (type === 'section') {
      query = `
        SELECT s.name, s.description, st.location AS stock_area
        FROM sections s
        JOIN stocks st ON s.stock_area_id = st.id
        WHERE s.id = $1;
      `;
    } else if (type === 'stock') {
      query = `
        SELECT st.location, st.description,
          (SELECT COUNT(*) FROM sections WHERE id = st.id) AS section_count
        FROM stocks st
        WHERE st.id = $1;
      `;
    } else {
      return res.status(400).json({ error: 'Invalid type specified' });
    }

    const result = await pool.query(query, [id]);
    res.json(result.rows[0] || {});
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
