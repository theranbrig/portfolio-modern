import CodeBlock from '@/components/CodeBlock';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
    console.log(components);
    return {
        code: (props) => {
            console.log(props);
            return <CodeBlock {...props} style={{ color: 'red' }} />;
        },
        ...components,
    };
}
