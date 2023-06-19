// src/components/code.tsx
'use client';

import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { aura } from '@uiw/codemirror-theme-aura';
import CodeMirror from '@uiw/react-codemirror';
import { FC, useEffect, useState } from 'react';

interface Props {
  code: string;
  editable?: boolean;
  onChange?: (value: string) => void;
}

const COPY_RESET_DELAY_MS = 2000;

export const CodeBlock: FC<Props> = ({
  code,
  editable = false,
  onChange = () => {},
}) => {
  const [copyText, setCopyText] = useState<string>('Copy');

  useEffect(() => {
    if (copyText === 'Copied!') {
      const timeout = setTimeout(() => {
        setCopyText('Copy');
      }, COPY_RESET_DELAY_MS);

      return () => clearTimeout(timeout);
    }
  }, [copyText]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyText('Copied!');
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <div className="relative">
      <button
        aria-label="Copy code to clipboard"
        className="absolute right-0 top-0 z-10 rounded bg-[#1A1B26] p-1 text-xs text-white hover:bg-[#2D2E3A] active:bg-[#2D2E3A]"
        onClick={copyToClipboard}
      >
        {copyText}
      </button>

      <CodeMirror
        editable={editable}
        value={code}
        minHeight="500px"
        extensions={[StreamLanguage.define(go)]}
        theme={aura}
        onChange={onChange}
      />
    </div>
  );
};
