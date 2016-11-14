import nodeResolve from 'rollup-plugin-node-resolve';

class RollupNG2 {
	resolveId(id, from) {
		if (id.startsWith('rxjs/')) {
			return `${__dirname}/node_modules/rxjs-es/${id.replace('rxjs/', '')}.js`;
        }

		return undefined;
	}
}

const rollupNG2 = () => new RollupNG2();

export default {
	entry: 'dist/app/main.prod.js',
	sourceMap: true,
	treeshake: true,
	moduleName: 'main',
	format: 'iife',
    plugins: [
		rollupNG2(),
		nodeResolve({
			jsnext: true,
            module: true,
			main: true
        })
	]
}
