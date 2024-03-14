import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import PostsPages from 'pages/PostsPage/PostsPage';
import PostPage from 'pages/PostPage/PostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsPages />} />
        <Route path="/posts/:page" element={<PostsPages />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
