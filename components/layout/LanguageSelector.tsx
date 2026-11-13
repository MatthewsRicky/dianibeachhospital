export default function LanguageSelector() {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-700">
      <span aria-hidden="true">◎</span>
      <span>Language</span>
      <span aria-hidden="true" className="text-xs">
        ▾
      </span>
    </div>
  );
}
