import million from "million/compiler";
/** @type {import('next').NextConfig} */
const nextConfig = {
	basePath: "/gh-pages",
	output: "export",
	images: {
		unoptimized: true,
	},
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

export default million.next(nextConfig, { auto: { rsc: true } });
