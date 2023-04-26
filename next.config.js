/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
	reactStrictMode: false,
	output: "export",
	experimental: {
		appDir: true,
	},
};

module.exports = nextConfig;
