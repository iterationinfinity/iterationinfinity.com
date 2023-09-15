/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		esmExternals: true,
		typedRoutes: true,
	},
	webpack(config, { isServer, dev }) {
		config.experiments = { ...config.experiments, asyncWebAssembly: true };
		config.output.webassemblyModuleFilename = isServer && !dev ? "../static/wasm/[modulehash].wasm" : "static/wasm/[modulehash].wasm";
		config.module.rules.push({
			test: /\.svg$/u,
			use: ["@svgr/webpack"],
		});

		return config;
	},
};

export default nextConfig;
