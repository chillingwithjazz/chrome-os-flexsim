/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DesktopProvider } from './context/DesktopContext';
import { Desktop } from './components/Desktop';
import { Shelf } from './components/Shelf';

export default function App() {
  return (
    <DesktopProvider>
      <div className="w-full h-screen overflow-hidden relative bg-black text-gray-900">
        <Desktop />
        <Shelf />
      </div>
    </DesktopProvider>
  );
}
