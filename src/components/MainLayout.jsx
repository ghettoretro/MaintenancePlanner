/**
 * @PATH [src/components/MainLayout.jsx]
 * @REV [20260226-0908]
 * @MODULE [ShiftPlanner]
 * @STATUS [DEV]
 * @FILETYPE [LYT]
 * @DESC [Main Layout Component]
 * @COMPLIANCE [None]
 * -------------------------------------
 * @TODO_START
 * [?] Pulled in from AdaptiveEngine to stub for ShiftPlanner build. Use whatever can be used.
 * [?] Remove Sidebar
 * [?] Determine if useApp is necessary?
 * [?] Determine if PrintHeader is necessary?
 * [?] Stub to absorb "MasterDetailLayout.jsx" as the base model page type?
 * @TODO_END
 * =====================================*/

import { useEffect } from 'react'
import PrimaryNavbar from './PrimaryNavbar'

export const MainLayout = ({ activeTab, navItems, children }) => { 
    useEffect(() => {
        const baseTitle = 'ShiftPlanner';
        document.title = activeTab?.title ? `${baseTitle} | ${activeTab.title}` : baseTitle;
    }, [activeTab?.title]); 

    return (
        <div className="flex flex-col h-screen bg-surface-primary text-text-primary">
            {/* If you haven't brought over PrimaryNavbar yet, you can comment this out temporarily */}
            <PrimaryNavbar {...activeTab} actions={navItems} />
            
            <div className="flex flex-1 overflow-hidden"> 
                <main className="flex-1 overflow-y-auto p-4 transition-all duration-300">
                    {children}
                </main>
            </div>
        </div>
    );
};