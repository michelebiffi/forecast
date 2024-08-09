'use client';

import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Navbar from "./components/Navbar";

const Home = () => {
  return (

    <div className="min-h-full flex flex-col bg-blue-100">

      <Navbar />

        <div className="flex flex-col items-center justify-center text-center gap-y-8 flex-1 px-6 pb-80">

          <Header />

          <Input />

        </div>









      <Footer />
    </div>

   


        

  )
}

export default Home