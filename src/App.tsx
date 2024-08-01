import React from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainRoute from "./components/main-route/MainRoute"
import './App.css'

function App() {

  return (
    <>
      <div>
      <Header />
      <main className="container">
        <MainRoute />
        {/* <p>Welcome to my website!</p> */}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
