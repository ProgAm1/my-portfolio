interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  subtitleClassName?: string;
}

export default function SectionTitle({ label, title, subtitle, subtitleClassName }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 mx-auto max-w-3xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-[10px] md:text-xs font-semibold uppercase tracking-widest text-violet-300">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
        {label}
      </div>
      
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      
      {subtitle && (
        <p className={`mt-2 text-sm md:text-base font-medium text-slate-400 px-2 lg:text-lg ${subtitleClassName || ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
