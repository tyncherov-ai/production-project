import { memo, useCallback } from 'react';
import { GoCopy } from 'react-icons/go';
import { classNames } from 'shared/lib/classNames/classNames';

import './Code.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames('code', {}, [className])}>
      <button type="button" className="code__copy" onClick={handleCopy}>
        <GoCopy size={18} />
      </button>
      <code>{text}</code>
    </pre>
  );
});

Code.displayName = 'Code';
