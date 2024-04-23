import React from "react";
import Sidebar from "./Sidebar";
import Form from "./Form";
import Head from "./Head";
import Footer from "./Footer";

export default function Main() {
  return (
    <section className="main-body">
      <Sidebar />
      <div className="main-page">
        <Head />
        <Form />
        <Footer />
      </div>
    </section>
  );
}
