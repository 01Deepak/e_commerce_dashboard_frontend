import React from "react"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import MainRoute from "./components/main-route/MainRoute"

function App() {

  return (
    <>
      <div>
      <Header />
      <main style={{ padding: '20px'}}>
        <MainRoute />
        {/* <p>Welcome to my website!</p> */}
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
