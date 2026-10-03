import { useState, useCallback } from "react";

export function useCopyToClipboard() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = useCallback(async (text: string, label?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label || text);
      setTimeout(() => setCopied(null), 2000);
      return true;
    } catch (error) {
      console.error("Failed to copy:", error);
      return false;
    }
  }, []);

  return { copied, copy };
}