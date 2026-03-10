interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ label, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-14 text-center">
      <span className="inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-violet-400 border border-violet-500/20">
        {label}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl mx-auto text-base text-slate-500">{subtitle}</p>
      )}
    </div>
  );
}
