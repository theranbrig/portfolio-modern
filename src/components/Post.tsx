import { MDXProps } from 'mdx/types';
import { JSX } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Model from '../app/content/3d-model.mdx';
import CSSGrid from '../app/content/css-grid.mdx';
interface IPost {
    slug: string;
}

const posts: { id: string; component: (props: MDXProps) => JSX.Element }[] = [
    { id: '3d-model', component: Model },
    { id: 'css-grid', component: CSSGrid },
];

function Post({ slug }: IPost) {
    const PostData = posts.find((post) => post.id === slug)?.component;

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

    if (!PostData) return null;

    return <PostData components={overrideComponents} />;
}

export default Post;
