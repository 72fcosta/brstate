import React, { useState } from 'react';
import { SectionId } from './types';
import { Sidebar } from './components/layout/Sidebar';
import { HeaderTicker } from './components/layout/HeaderTicker';
import { SearchModal } from './components/layout/SearchModal';
import { ExportModal } from './components/layout/ExportModal';
import { NotificationsModal } from './components/layout/NotificationsModal';
import { SettingsModal } from './components/layout/SettingsModal';

import { OverviewView } from './components/views/OverviewView';
import { PibView } from './components/views/PibView';
import { InflationView } from './components/views/InflationView';
import { MonetaryPolicyView } from './components/views/MonetaryPolicyView';
import { LaborMarketView } from './components/views/LaborMarketView';
import { ExternalSectorView } from './components/views/ExternalSectorView';
import { FiscalView } from './components/views/FiscalView';
import { MethodologyView } from './components/views/MethodologyView';

export const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>('pib');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [unreadNotifications, setUnreadNotifications] = useState(2);

  const handleSelectSection = (section: SectionId) => {
    if (section === 'config') {
      setIsSettingsOpen(true);
      return;
    }
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMarkAllNotificationsAsRead = () => {
    setUnreadNotifications(0);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans">
      {/* Persistent Left Sidebar Navigation */}
      <Sidebar
        currentSection={currentSection}
        onSelectSection={handleSelectSection}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area (offset by sidebar width on lg screens) */}
      <div className="flex-1 flex flex-col lg:pl-64 transition-all duration-200">
        {/* Sticky Macro Ticker & Operational Action Header */}
        <HeaderTicker
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenNotifications={() => setIsNotificationsOpen(true)}
          onOpenExport={() => setIsExportOpen(true)}
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          unreadNotificationsCount={unreadNotifications}
        />

        {/* Dynamic View Canvas */}
        <main className="flex-1 p-4 lg:p-6 max-w-7xl w-full mx-auto">
          {currentSection === 'overview' && (
            <OverviewView
              onSelectSection={handleSelectSection}
              onOpenExport={() => setIsExportOpen(true)}
            />
          )}

          {currentSection === 'pib' && (
            <PibView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'inflacao' && (
            <InflationView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'selic' && (
            <MonetaryPolicyView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'trabalho' && (
            <LaborMarketView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'externo' && (
            <ExternalSectorView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'fiscal' && (
            <FiscalView onOpenExport={() => setIsExportOpen(true)} />
          )}

          {currentSection === 'metodologia' && <MethodologyView />}
        </main>

        {/* Institutional Baseline Footer */}
        <footer className="w-full bg-surface-container-lowest border-t border-outline-variant px-4 lg:px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs text-on-surface-variant gap-2 mt-auto">
          <div className="flex flex-wrap items-center gap-3 text-[11px]">
            <span className="font-bold text-primary">BrState Terminal Macroeconômico</span>
            <span className="text-outline">•</span>
            <span className="font-medium text-primary">Autoria dos dados atuais: Fábio Ryan Meneses Costa</span>
            <span className="text-outline">•</span>
            <span className="text-secondary font-medium inline-flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Base Consolidada
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-outline">
            <span>Frequência D-0</span>
          </div>
        </footer>
      </div>

      {/* Global Interactive Modals */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={handleSelectSection}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        onMarkAllAsRead={handleMarkAllNotificationsAsRead}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

