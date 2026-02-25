/**
 * @PATH [src/components/navigation/PrimaryNavbar.jsx]
 * @REV [20260225-0916]
 * @MODULE [OS]
 * @STATUS [DEV]
 * @FILETYPE [CMP]
 * @DESC [A high-fidelity top navigation bar with active state tracking and global action button. Main navigation anchor for AE modules.]
 * @COMPLIANCE [Functional React; Custom Icon Library (No Heroicons)]
 * -------------------------------------
 * @TODO_START
 * [+] Add 'bell' SVG path to global ICON_PATHS dictionary.
 * [+] Integrate with React Router for active link path matching.
 * [+] Add 'Notifications' dropdown logic to the bell icon.
 * @TODO_END
 * =====================================*/

import { Icon } from '../ui/icons'; // Adjust relative path based on actual folder structure

const PrimaryNavbar = ({ 
  activeTab = 'Dashboard', 
  navItems = ['Dashboard', 'Team', 'Projects', 'Calendar'],
  onActionClick 
}) => {
  return (
    <nav className="w-full bg-surface-secondary border-b border-border-primary px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-10">
        
        {/* AE Logo Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent-primary rounded-lg flex items-center justify-center shadow-md">
            <span className="text-white font-black text-xs">AE</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <button
                key={item}
                className={`relative text-sm font-bold transition-colors py-2 ${
                  isActive ? 'text-text-primary' : 'text-text-tertiary hover:text-text-primary'
                }`}
              >
                {item}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center gap-5">
        
        {/* Global Action Button */}
        <button
          onClick={onActionClick}
          className="flex items-center gap-2 bg-accent-primary text-text-primary hover:brightness-125 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-md"
        >
          {/* Swapped Heroicon for Local Icon */}
          <Icon name="add" size={20} />
          <span>New Job</span>
        </button>

        {/* Notification Bell */}
        <button className="text-text-secondary hover:text-text-primary transition-colors relative">
          {/* Swapped Heroicon for Local Icon - NOTE: You will need to add 'bell' to your ICON_PATHS */}
          <Icon name="bell" size={24} />
          
          {/* Alert dot using your surface-alert token */}
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-surface-alert rounded-full border-2 border-surface-secondary" />
        </button>
      </div>
    </nav>
  );
};

export default PrimaryNavbar;