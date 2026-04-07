import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the Vite-built static files
app.use(express.static(path.join(__dirname, '../dist/public')));

// SPA fallback - serve index.html for any unknown route
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
