import { useMDXComponents } from '@/mdx-components';
import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'course/content/assignments'));
  return files.map(file => {
    return {
      slug: file.replace('.mdx', '')
    }
  });
}

export default async function AssignmentsPage({ params }: { params: { slug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'course/content/assignments', `${params.slug}.mdx`));
  return (
    <MDXRemote source={content} components={useMDXComponents({})} options={{
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight]
      }
    }} />
  )
}