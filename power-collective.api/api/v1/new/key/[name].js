export default function handler(req, res) {
  const { name } = req.query;

  // Generate a simple key using the name + timestamp
  const key = `${name}-${Date.now()}`;

  res.status(200).json({
    success: true,
    requestedName: name,
    generatedKey: key
  });
}
