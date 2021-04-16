export default (req, res) => {
  const { id } = req.query;
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};
