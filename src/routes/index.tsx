import React from "react";

import { Routes, Route } from "react-router-dom";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts/:contactId" element={<Contact />} />
    </Routes>
  );
}
