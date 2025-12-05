// This hook was created but is no longer used since copy functionality was implemented directly in the component
// It's kept here in case it's needed in the future
import { useState } from 'react';

type CopyStatus = 'idle' | 'copied' | 'error';

export const useCopyToClipboard = () => {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000); // Reset status after 2 seconds
    } catch (error) {
      console.error('Failed to copy text to clipboard:', error);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000); // Reset status after 2 seconds
    }
  };

  return { copyStatus, copyToClipboard };
};