import { ReactNode } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeProps = {
  children: ReactNode;
  language: string;
  indent?: number;
};

export default function CodeBlock({ language, indent, children }: CodeProps) {
  
  const codeString = typeof children === 'string' ? children : String(children);

  return (
    <SyntaxHighlighter PreTag="code" customStyle={{ display: "block" }} language={language} className="!text-sm !rounded-xl" style={oneLight}>
      {codeString}
    </SyntaxHighlighter>
  );
};