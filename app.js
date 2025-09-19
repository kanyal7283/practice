const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
const authRoutes = require('./routes/routes');
const router = express.Router();

// Middleware to set security headers
  app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Content-Security-Policy', "default-src 'self' https://hmsi-portal-uat-48801d68a3ef.herokuapp.com");
  res.setHeader('Date', new Date().toUTCString());
  res.setHeader('Content-Length', Buffer.byteLength(JSON.stringify(res.body || ''))); 
  res.setHeader('Via', '1.1 some-proxy-server');
  res.setHeader('Connection', 'keep-alive');
  res.setHeader('X-Powered-By', 'Express');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  next();
});




// Example of logging an API request
app.get('/', (req, res) => {
  res.send('Welcome to practice api ');
});

// Use the auth routes
app.use('/api',authRoutes);



// Start the server
const PORT = (process.env.PORT ?? 9000);


app.listen(PORT, () => {
  console.log(`Server is running on port ------> ${PORT}`);
});

