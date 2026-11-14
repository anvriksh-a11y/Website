import React from 'react';
import Reveal from './Reveal';

interface KeyTakeawaysProps {
  takeaways: string[];
}

const KeyTakeaways: React.FC<KeyTakeawaysProps> = ({ takeaways }) => {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <Reveal variant="scale" duration={800}>
      <section className="py-8 px-6 sm:px-8 my-8 relative overflow-hidden rounded-[22px] bg-white border border-[#D5E1CE] shadow-[0_8px_24px_rgba(21,24,17,0.05)] select-none" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} aria-label="Key Takeaways">
        <h3 className="text-xl sm:text-2xl font-[800] mb-6 flex items-center gap-3 text-[#141912] tracking-tight relative">
          <span className="w-8 h-8 rounded-xl bg-[#003D2B] flex items-center justify-center text-white shadow-xs">
            <i className="fas fa-bolt text-xs" />
          </span>
          Key Takeaways
        </h3>
        <ul className="space-y-4 relative">
          {takeaways.map((takeaway, index) => (
            <li key={index} className="flex gap-3.5 group items-start">
              <span className="mt-1 w-5 h-5 rounded-full bg-[#E3EDE0] border border-[#D3E2CF] flex items-center justify-center shrink-0">
                <i className="fas fa-check text-[#003D2B] text-[9px]" />
              </span>
              <span className="text-[#4E5B49] leading-relaxed text-sm sm:text-[15px]" dangerouslySetInnerHTML={{ __html: takeaway }} />
            </li>
          ))}
        </ul>
      </section>
    </Reveal>
  );
};

export default KeyTakeaways;
