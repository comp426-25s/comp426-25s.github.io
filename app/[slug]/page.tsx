import { useMDXComponents } from '@/mdx-components';
import { promises as fs } from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc'
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), 'course/content'));
  return files
    .filter(file => file !== 'assignments' && file !== 'readings' && file !== 'supplemental')
    .map(file => {
      return {
        slug: file.replace('.mdx', '')
      }
    });
}

export default async function DynamicMdxPage({ params }: { params: { slug: string }}) {
  const content = await fs.readFile(path.join(process.cwd(), 'course/content', `${params.slug}.mdx`));
  return (
    <MDXRemote source={content} components={useMDXComponents({})} options={{
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight]
      }
    }} />
  )
}