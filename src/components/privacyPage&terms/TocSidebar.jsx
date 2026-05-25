export function TocSidebar({
  items,
  title,
}) {
  return (
    <aside className="hidden lg:block sticky top-24 self-start w-72 shrink-0">
      <div className="bg-appso-dark/50 border border-slate-800 rounded-2xl p-5">
        <div className="text-appso-orange text-[10px] font-bold tracking-widest uppercase mb-4">
          {title}
        </div>
        <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 custom-scroll">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-start gap-3 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors group"
            >
              <span className="text-appso-orange/60 group-hover:text-appso-orange font-mono text-xs shrink-0 mt-0.5 w-5">
                {item.num}
              </span>
              <span className="leading-snug">{item.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
