// This file is a Vite entry — the actual portfolio runs via index.html (CDN React + Babel)
// Running `npm run dev` is not the right way to serve this project.
// Use: npx serve . --listen 5173
// Or open index.html directly in a static file server.

function App() {
  // Redirect to the actual portfolio homepage
  if (typeof window !== 'undefined') {
    window.location.replace('/index.html')
  }
  return null
}

export default App
