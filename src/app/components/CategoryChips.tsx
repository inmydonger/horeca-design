export const CATEGORIES = ["All", "Beef", "Chicken", "Sea Food", "Other"] as const;
export type Cat = (typeof CATEGORIES)[number];

export function CategoryChips({ value, onChange }: { value: Cat; onChange: (c: Cat) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 no-scrollbar">
      {CATEGORIES.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`shrink-0 px-4 h-9 rounded-full border text-sm transition-colors ${
            value === c
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-card text-foreground border-border hover:bg-muted"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
