import { ArchitectureNode } from '@/types/project';

interface CaseStudyDiagramProps {
  steps?: string[];
  nodes?: ArchitectureNode[];
  title?: string;
}

export function CaseStudyDiagram({
  steps,
  nodes,
  title = 'HOW IT WORKS',
}: CaseStudyDiagramProps) {
  const items: { label: string; sublabel?: string }[] = steps
    ? steps.map((s) => ({ label: s }))
    : nodes || [];

  if (!items || items.length === 0) return null;

  return (
    <div className="w-full my-4 p-6 md:p-8 bg-[#101111] border border-[#e2e1da]/10 rounded-sm flex flex-col gap-6">
      <div className="flex justify-between items-center font-mono text-[10px] text-[#555754] tracking-widest uppercase">
        <span>{title}</span>
        <span>PROCESS FLOW</span>
      </div>

      <div className="flex flex-wrap items-center justify-start gap-2 md:gap-3 py-2">
        {items.map((item, idx) => (
          <div
            key={`${item.label}-${idx}`}
            className="flex items-center gap-2 md:gap-3"
          >
            <div className="px-3 py-2 bg-[#171918] border border-[#e2e1da]/15 rounded-sm flex flex-col items-center text-center">
              <span className="font-mono text-xs font-semibold text-[#e2e1da] tracking-wider uppercase">
                {item.label}
              </span>
              {item.sublabel && (
                <span className="text-[10px] text-[#555754] mt-0.5">
                  {item.sublabel}
                </span>
              )}
            </div>

            {idx < items.length - 1 && (
              <span className="text-xs text-[#555754] font-mono">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
