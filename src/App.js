import './App.css';
import { Header } from "./components/header/Header"
import { BlogContent } from "./components/BlogContent/BlogContent"
import { Footer } from "./components/footer/Footer"


export function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BlogContent/>
      </main>
      <Footer/>

      
    </div>
  );
}


