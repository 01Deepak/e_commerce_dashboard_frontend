import React from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <div>
      <Header />
      <main style={{ padding: '20px', marginTop: '60px' }}>
        <p>Welcome to my website!</p>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
