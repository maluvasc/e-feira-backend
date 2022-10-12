module.exports = {
	env: {
		node: true,
		commonjs: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "prettier"],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
	},
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": 0,
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
};
