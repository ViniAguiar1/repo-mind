interface SidebarItemProps {
  label: string;
  icon: string;
  active?: boolean;
  disabled?: boolean;
}

export function SidebarItem({ label, icon, active, disabled }: SidebarItemProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`
        flex items-center gap-2 w-full px-3 py-1.5 rounded-lg text-sm transition-colors
        ${
          active
            ? "bg-bg-tertiary text-text-primary"
            : disabled
              ? "text-text-muted cursor-not-allowed"
              : "text-text-secondary hover:bg-bg-tertiary hover:text-text-primary cursor-pointer"
        }
      `}
    >
      <span className="text-xs">{icon}</span>
      {label}
    </button>
  );
}
