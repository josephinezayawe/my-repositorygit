const handler = (err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
};
export default handler;
