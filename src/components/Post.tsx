/**
 * ©2025 8eo, Inc.
 */

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IPost {
    slug: string;
}

async function getProps(slug: string) {
    const post = await import(`../app/content/${slug}.mdx`);
    return post.default;
}

export default async function Post({ slug }: IPost) {
    const PostData = await getProps(slug);

    const codeBlock = (props: { children: string; className?: string }) => {
        return (
            <SyntaxHighlighter
                language={props.className}
                style={atomOneDark}
                useInlineStyles
                customStyle={{ fontFamily: "'Fira Code', monospace", width: 'auto', display: 'inline-block' }}
                class={props.className ? 'language' : 'no-language'}
            >
                {props.children}
            </SyntaxHighlighter>
        );
    };

    const overrideComponents = {
        code: codeBlock,
    };

    return <PostData components={overrideComponents} />;
}
