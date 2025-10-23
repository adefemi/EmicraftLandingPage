import { X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MobileMenuButton({ isOpen, onClick }: MobileMenuButtonProps) {
  return (
    <button
      className="transition-all duration-300 text-white p-3 rounded-lg bg-[#0e9a8d] hover:bg-[#028073] active:scale-95 shadow-lg"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X size={24} strokeWidth={2.5} />
      ) : (
        <div className="flex flex-col space-y-1.5 w-6">
          <span className="w-6 h-0.5 bg-white rounded-full"></span>
          <span className="w-6 h-0.5 bg-white rounded-full"></span>
          <span className="w-4 h-0.5 bg-white rounded-full"></span>
        </div>
      )}
    </button>
  );
}
