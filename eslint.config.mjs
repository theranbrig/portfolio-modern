import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: ['next/core-web-vitals', 'next/typescript'],
        rules: {
            '@next/next/no-document-import-in-page': 'off',
            '@next/next/no-img-element': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react-hooks/rules-of-hooks': 'off',
        },
    }),
];

export default eslintConfig;
