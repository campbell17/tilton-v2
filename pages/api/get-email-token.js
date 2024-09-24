export default function handler(req, res) {
  if (req.method === 'GET') {
    const email = 'contact@christilton.com'
    
    // Simple obfuscation: Base64 encoding
    const token = Buffer.from(email).toString('base64')

    res.status(200).json({ token })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}