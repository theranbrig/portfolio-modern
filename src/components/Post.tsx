import { MDXProps } from 'mdx/types';
import { JSX } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Model from '../app/content/3d-model.mdx';
import CSSGrid from '../app/content/css-grid.mdx';
import Destructuring from '../app/content/destructuring-js.mdx';
import Calculator from '../app/content/hooks-calculator.mdx';
import Immutable from '../app/content/immutable-data.mdx';
import JSTips from '../app/content/js-tips.mdx';
import LazyImage from '../app/content/lazy-image.mdx';
import FirebaseAuth from '../app/content/next-firebase-auth.mdx';
import Refactoring from '../app/content/refactoring-old-code.mdx';
import StopCoding from '../app/content/stop-coding.mdx';
import TailwindPoints from '../app/content/tailwind-points.mdx';
interface IPost {
    slug: string;
}

const posts: { id: string; component: (props: MDXProps) => JSX.Element }[] = [
    { id: '3d-model', component: Model },
    { id: 'css-grid', component: CSSGrid },
    { id: 'destructuring-js', component: Destructuring },
    { id: 'hooks-calculator', component: Calculator },
    { id: 'immutable-data', component: Immutable },
    { id: 'js-tips', component: JSTips },
    { id: 'lazy-image', component: LazyImage },
    { id: 'next-firebase-auth', component: FirebaseAuth },
    { id: 'refactoring-old-code', component: Refactoring },
    { id: 'stop-coding', component: StopCoding },
    { id: 'tailwind-points', component: TailwindPoints },
];

function Post({ slug }: IPost) {
    const PostData = posts.find((post) => post.id === slug)?.component;
    console.log(posts.find((post) => post.id === slug));
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
