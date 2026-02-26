/**
 * @PATH [src/components/MainLayout.jsx]
 * @REV [20260226-1031]
 * @MODULE [ShiftPlanner]
 * @STATUS [DEV]
 * @FILETYPE [LYT]
 * @DESC [Main Layout Component]
 * @COMPLIANCE [None]
 * -------------------------------------
 * @TODO_START
 * [?] Pulled in from AdaptiveEngine to stub for ShiftPlanner build. Use whatever can be used.
 * [?] Remove Sidebar
 * [+] Add routing wrapper/outlet once router is implemented
 * [?] Determine if useApp is necessary?
 * [?] Determine if PrintHeader is necessary?
 * [?] Stub to absorb "MasterDetailLayout.jsx" as the base model page type?
 * @TODO_END
 * =====================================*/

import React, { useState } from 'react';
import PrimaryNavbar from './PrimaryNavbar';

export default function MainLayout({ children }) {
  // Hoisted state to manage navigation before routing is implemented
  const [activeTab, setActiveTab] = useState('Planner');

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden bg-surface-primary text-text-primary">
      <PrimaryNavbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      <main className="flex-1 flex flex-col w-full overflow-y-auto">
        {children}
      </main>
    </div>
  );
}