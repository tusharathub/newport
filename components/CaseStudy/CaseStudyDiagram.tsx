import { ArchitectureNode } from '@/types/project';

interface CaseStudyDiagramProps {
  nodes: ArchitectureNode[];
  title?: string;
}

export function CaseStudyDiagram({
  nodes,
  title = 'TECHNICAL ARCHITECTURE & DATA FLOW',
}: CaseStudyDiagramProps) {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div className="w-full my-8 p-6 md:p-8 bg-[#101111] border border-[#e2e1da]/10 rounded-sm flex flex-col gap-6">
      <div className="flex justify-between items-center font-mono text-[10px] text-[#555754] tracking-widest uppercase">
        <span>{title}</span>
        <span>SYSTEM DIAGRAM</span>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-around gap-4 py-4">
        {nodes.map((node, idx) => (
          <div
            key={node.label}
            className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto"
          >
            <div className="flex flex-col items-center justify-center p-4 bg-[#171918] border border-[#e2e1da]/15 rounded-sm min-w-[120px] text-center w-full md:w-auto">
              <span className="font-mono text-xs font-semibold text-[#e2e1da] tracking-wider">
                {node.label}
              </span>
              {node.sublabel && (
                <span className="text-[10px] text-[#555754] mt-0.5">
                  {node.sublabel}
                </span>
              )}
            </div>

            {idx < nodes.length - 1 && (
              <span className="text-xs text-[#252725] font-mono rotate-90 md:rotate-0">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
