import './App.css';
import './container.css';
import { Brand, CTA, Navbar } from './components'
import { Blog, Footer, Header, Features, Possibility, WhatGPT3 } from './containers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>

  );
}

export default App;
