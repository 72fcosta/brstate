import React from 'react';
import { SYSTEM_NOTIFICATIONS } from '../../data/macroData';

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMarkAllAsRead: () => void;
}

export const NotificationsModal: React.FC<NotificationsModalProps> = ({
  isOpen,
  onClose,
  onMarkAllAsRead,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-end pt-14 pr-4 lg:pr-10 bg-primary/20 backdrop-blur-xs">
      <div 
        className="w-full max-w-sm bg-surface-container-lowest rounded-lg border border-outline-variant shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant bg-surface-container-low/50">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[19px] text-primary">notifications</span>
            <span className="text-xs font-bold text-primary">Releases & Avisos Macroeconômicos</span>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-surface-container text-outline">
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        <div className="max-h-96 overflow-y-auto divide-y divide-outline-variant/40">
          {SYSTEM_NOTIFICATIONS.map((item) => (
            <div key={item.id} className="p-3.5 hover:bg-surface-container-low/50 transition-colors">
              <div className="flex items-center justify-between text-[10px] text-outline mb-1 font-mono">
                <span className="font-semibold text-primary">{item.category}</span>
                <span>{item.time}</span>
              </div>
              <h4 className="text-xs font-semibold text-primary">{item.title}</h4>
              <p className="text-[11px] text-on-surface-variant mt-1 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <div className="px-4 py-2.5 bg-surface-container-low/70 border-t border-outline-variant flex items-center justify-between text-[11px]">
          <button 
            onClick={onMarkAllAsRead} 
            className="text-secondary font-semibold hover:underline"
          >
            Marcar todas como lidas
          </button>
          <button onClick={onClose} className="text-outline hover:text-primary font-medium">
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
