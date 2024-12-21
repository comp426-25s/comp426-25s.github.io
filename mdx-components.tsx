import type { MDXComponents } from 'mdx/types'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollText, TriangleAlert, Youtube, Presentation } from 'lucide-react';
import { Button } from "@/components/ui/button"
import SyntaxHighlighter from 'react-syntax-highlighter';
import CodeBlock from './components/widgets/codeblock';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl">
            { children }
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="mt-8 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            { children }
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-xl mt-6 scroll-m-20 font-semibold tracking-tight">
            { children }
        </h3>
    ),
    h4: ({ children }) => (
        <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
            { children }
        </h4>
    ),
    p: ({ children }) => (
        <p className="mt-2 text-base">
            { children }
        </p>
    ),
    a: ({href, children}) => (
        <a href={href} target="_blank" className="link-style">
            { children }
        </a>
    ),
    code: ({ children }) => (
        <code className="bg-[#FAFAFA] !text-pink-600 p-1 rounded-md text-sm">
            { children }
        </code>
    ),
    blockquote: ({ children }) => (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            { children }
        </blockquote>
    ),
    table: ({ children }) => (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                { children }
            </table>
        </div>
    ),
    tr: ({ children }) => (
        <tr className="m-0 border-t p-0 even:bg-muted">
            { children }
        </tr>
    ),
    th: ({ children }) => (
        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
            { children }    
        </th>
    ),
    td: ({ children }) => (
        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
            { children }
        </td>
    ),
    ul: ({ children }) => (
        <ul className="!list-disc">
            { children }
        </ul>
    ),
    Alert,
    AlertDescription,
    AlertTitle,
    ScrollText,
    TriangleAlert,
    Youtube,
    Presentation,
    Button,
    CodeBlock,
    ...components,
  }
}