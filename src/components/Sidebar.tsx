import { SidebarItem } from "./SidebarItem";

const NAV_ITEMS = [
  { label: "Chat", icon: "💬", active: true },
  { label: "Projects", icon: "📁", disabled: true },
  { label: "Settings", icon: "⚙️", disabled: true },
] as const;

export function Sidebar() {
  return (
    <aside className="flex flex-col w-56 h-screen bg-bg-secondary border-r border-border-primary">
      <div className="px-4 py-4">
        <h1 className="text-sm font-semibold text-text-primary tracking-tight">
          repo-mind
        </h1>
      </div>

      <nav className="flex-1 px-2 py-2 space-y-0.5">
        {NAV_ITEMS.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </nav>
    </aside>
  );
}
