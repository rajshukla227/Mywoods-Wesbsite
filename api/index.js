import app from '../server/server.js';

export default function handler(req, res) {
  // Strip the /api prefix before forwarding the request to Express
  if (req.url.startsWith('/api')) {
    req.url = req.url.replace(/^\/api/, '');
  }
  
  // Normalize empty URLs to root /
  if (req.url === '') {
    req.url = '/';
  }

  // Forward the modified request to the Express app
  return app(req, res);
}
