import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useMDXComponents } from '@/mdx-components';
import { promises as fs } from 'fs';
import { ScrollText, TriangleAlert } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path';


export default async function DynamicMdxPage({ params }: { params: { slug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'course/content/assignments', `${params.slug}.mdx`));
  return (
    <MDXRemote source={content} components={useMDXComponents({})} />
  )
}