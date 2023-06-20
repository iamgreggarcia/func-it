import { StreamLanguage } from '@codemirror/language';
import { go } from '@codemirror/legacy-modes/mode/go';
import { aura } from '@uiw/codemirror-theme-aura';
import CodeMirror from '@uiw/react-codemirror';
import { FC, useEffect, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

interface Props {
  code: string;
  editable?: boolean;
  showCopy?: boolean;
  onChange?: (value: string) => void;
}

const COPY_RESET_DELAY_MS = 2000;

export const CodeBlock: FC<Props> = ({
  code,
  editable = true,
  showCopy: showCopy = false,
  onChange = () => { },
}) => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);

  useEffect(() => {
    if (copySuccess) {
      const timeout = setTimeout(() => {
        setCopySuccess(false);
      }, COPY_RESET_DELAY_MS);

      return () => clearTimeout(timeout);
    }
  }, [copySuccess]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }

  return (
    <div className="relative w-full">
      {showCopy ? (
        <button
          type='button'
          aria-label="Copy code to clipboard"
          className="absolute right-2 top-2 z-10 rounded bg-[#1A1B26] p-1 opacity-80 text-xs text-white hover:bg-[#2D2E3A] hover:opacity-90 active:bg-[#2D2E3A] active:opacity-90"
          onClick={copyToClipboard}
        >
          {copySuccess ? <FiCheck color="green" /> : <FiCopy color="gray" />}

        </button>
      ) : null}

      <CodeMirror
        editable={editable}
        value={code}
        height="100%"
        width='100%'
        minHeight='100%'
        extensions={[StreamLanguage.define(go)]}
        theme={aura}
        onChange={onChange}
      />
    </div>
  );
};
