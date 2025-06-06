"use client";

import { FileIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

interface CodeComparisonProps {
  beforeCode: string;
  afterCode: string;
  languageOne: string;
  languageTwo: string;
  filenameOne: string;
  filenameTwo: string;
  lightTheme: string;
  darkTheme: string;
  vsText?: string;
}

export default function CodeComparison({
  beforeCode,
  afterCode,
  languageOne,
  languageTwo,
  filenameOne,
  filenameTwo,
  lightTheme,
  darkTheme,
  vsText
}: CodeComparisonProps) {
  const { theme, systemTheme } = useTheme();
  const [highlightedBefore, setHighlightedBefore] = useState("");
  const [highlightedAfter, setHighlightedAfter] = useState("");

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    const selectedTheme = currentTheme === "dark" ? darkTheme : lightTheme;

    async function highlightCode() {
      const before = await codeToHtml(beforeCode, {
        lang: languageOne,
        theme: selectedTheme,
      });
      const after = await codeToHtml(afterCode, {
        lang: languageTwo,
        theme: selectedTheme,
      });
      setHighlightedBefore(before);
      setHighlightedAfter(after);
    }

    highlightCode();
  }, [
    theme,
    systemTheme,
    beforeCode,
    afterCode,
    languageOne,
    languageTwo,
    lightTheme,
    darkTheme,
  ]);

  const renderCode = (code: string, highlighted: string) => {
    if (highlighted) {
      return (
        <div
          className="h-full overflow-auto bg-background font-mono text-sm [&>pre]:h-full [&>pre]:!bg-transparent [&>pre]:p-4 [&_code]:break-all"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      );
    } else {
      return (
        <pre className="h-full overflow-auto break-all bg-background p-4 font-mono text-sm text-foreground">
          {code}
        </pre>
      );
    }
  };
  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="relative w-full overflow-hidden rounded-xl border border-border">
        <div className="relative grid md:grid-cols-2 md:divide-x md:divide-border">
          <div>
            <div className="flex items-center bg-accent p-2 text-sm text-foreground">
              <FileIcon className="mr-2 h-4 w-4" />
              {filenameOne}
              {/* <span className="ml-auto">before</span> */}
            </div>
            {renderCode(beforeCode, highlightedBefore)}
          </div>
          <div>
            <div className="flex items-center bg-accent p-2 text-sm text-foreground">
              <FileIcon className="mr-2 h-4 w-4" />
              {filenameTwo}
              {/* <span className="ml-auto">after</span> */}
            </div>
            {renderCode(afterCode, highlightedAfter)}
          </div>
        </div>
        { vsText && (
          <div className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md bg-accent text-xs text-foreground">
            {vsText}
          </div>
        )}
      </div>
    </div>
  );
}
