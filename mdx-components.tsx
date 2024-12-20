import type { MDXComponents } from 'mdx/types'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollText, TriangleAlert, Youtube, Presentation } from 'lucide-react';
import { Button } from "@/components/ui/button"

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
        <h3 className="text-red-200 text-xl mt-6 scroll-m-20 font-semibold tracking-tight">
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
        <a href={href} className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
            { children }
        </a>
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
    ...components,
  }
}