/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import Landing from './pages/Landing';
import PoetProfile from './pages/PoetProfile';
import ProgrammerProfile from './pages/ProgrammerProfile';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/poet/*" element={<PoetProfile />} />
          <Route path="/programmer/*" element={<ProgrammerProfile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
