/**
 * @PATH [src/components/PrimaryNavbar.jsx]
 * @REV 20260226-1045
 * @MODULE [COM]
 * @STATUS [DEV]
 * @FILETYPE [CMP]
 * @DESC [Tailwind UI-spec navigation bar minus avatar/bell, utilizing local icons and NotepadWidget]
 * @COMPLIANCE [Functional React; Custom Icon Library]
 * -------------------------------------
 * @TODO_START
 * + Verify named vs default import for NotepadWidget
 * @TODO_END
 * =====================================*/

import React, { useState } from 'react';
import { Icon } from './icons';
import { Button } from './Button';
import { NotepadWidget } from './NotepadWidget'; 

export default function PrimaryNavbar({ 
  activeTab = 'Planner', 
  navItems = ['Planner', 'Locations', 'Assets', 'Team', 'Projects', 'Parts', 'Skills'],
  onTabChange,
  onActionClick 
}) {
  const [isNotepadOpen, setIsNotepadOpen] = useState(false);

  return (
    <nav className="bg-surface-secondary border-b border-border-primary">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Left Side: Logo & Main Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <div className="w-8 h-8 bg-accent-primary rounded flex items-center justify-center shadow-md">
                <span className="text-white font-black text-xs">SP</span>
              </div>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItems.map((item) => {
                  const isActive = activeTab === item;
                  return (
                    <button
                      key={item}
                      onClick={() => onTabChange && onTabChange(item)}
                      className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-surface-tertiary text-text-primary' 
                          : 'text-text-secondary hover:bg-surface-tertiary hover:text-text-primary'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side: Actions & Notepad (Replacing Bell/Avatar) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
            
            {/* Export / Download */}
            <Button
              onClick={onActionClick}
              className="rounded-md bg-accent-primary p-2 text-text-primary hover:brightness-125 focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface-secondary shadow-sm transition-all"
              title="Export Data"
            >
              <span className="sr-only">Export Data</span>
              <Icon name="download" size={20} />
            </Button>

            {/* Notepad Popover (Replaces Notification Bell) */}
            <div className="relative ml-1">
              <button
                type="button"
                onClick={() => setIsNotepadOpen(!isNotepadOpen)}
                className="relative rounded-full bg-surface-secondary p-1 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface-secondary transition-colors"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open Notepad</span>
                <Icon name="reader" size={24} />
              </button>

              {/* Notepad Dropdown Panel */}
              {isNotepadOpen && (
                <div className="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-md bg-surface-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-border-primary overflow-hidden">
                  <NotepadWidget onClose={() => setIsNotepadOpen(false)} />
                </div>
              )}
            </div>

            {/* Print Action */}
            <button
              type="button"
              className="relative ml-1 rounded-full bg-surface-secondary p-1 text-text-secondary hover:text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:ring-offset-2 focus:ring-offset-surface-secondary transition-colors"
            >
              <span className="sr-only">Print</span>
              <Icon name="externalLink" size={24} />
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
}