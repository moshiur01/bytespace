import type { CSSProperties } from 'react';

const DotLabel = ({ text }: { text: string }) => {
  const chars = Array.from(text);
  return (
    <span className="dot-label" style={{ '--char-count': chars.length - 1 } as CSSProperties}>
      <span className="dot-label__dot" aria-hidden="true" />
      <span className="sr-only">{text}</span>
      {chars.map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="dot-label__char"
          style={{ '--char': index } as CSSProperties}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default DotLabel;
