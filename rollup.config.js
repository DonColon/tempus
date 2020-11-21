import { babel } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { commonjs } from '@rollup/plugin-commonjs';

import pkg from './package.json';

const baseBundle = {
    input: './src/index.js',
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {})
    ],
    output: {
        exports: 'named'
    }
}

const cjsBundle = {
    ...baseBundle,
    plugins: [
        babel({
            babelHelpers: 'runtime'
        })
    ],
    output: {
        ...baseBundle.output,
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
    },
};

const esBundle = {
    ...baseBundle,
    output: {
        ...baseBundle.output,
        file: pkg.module,
        format: 'es',
        sourcemap: true
    }
};

const prodUmdBundle = {
    ...baseBundle,
    plugins: [
        babel({
            babelHelpers: 'runtime'
        }),
        terser({
            compress: {
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
            }
        })
    ],
    output: {
        ...baseBundle.output,
        file: pkg.browser,
        name: pkg.name,
        format: 'umd'
    }
};

const devUmdBundle = {
    ...baseBundle,
    plugins: [
        babel({
            babelHelpers: 'runtime'
        })
    ],
    output: {
        ...baseBundle.output,
        file: `lib/${pkg.name}.js`,
        name: pkg.name,
        format: 'umd'
    }
};

export default [ cjsBundle, esBundle, devUmdBundle, prodUmdBundle ];