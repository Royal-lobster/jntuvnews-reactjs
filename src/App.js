import React from "react";
import Header from "./Components/Header";
import "./App.css";
import PostsSection from "./Components/PostsSection";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <PostsSection />
      <Footer />
    </div>
  );
}

export default App;
