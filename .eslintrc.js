module.exports = {
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "airbnb-base",
    "prettier/react",
    "prettier"
  ],
  parser: "babel-eslint",
  plugins: ["prettier"],
  env: { browser: true },
  rules:{
		"import/prefer-default-export": 0,
		"react/jsx-no-undef": 1,
		"no-confusing-arrow": 0,
		// disables the windows/unix linebreak checks.
		"linebreak-style": 0,
		"linebreak-style": [0, "error", "windows"],
		"react/prop-types": [0],
		"no-underscore-dangle": [0],
		"react/prefer-stateless-function": [0],
		//  allow .js extensions for JSX.
		"react/jsx-filename-extension": [
			1,
			{
				extensions: [".js", ".jsx"]
			}
		],
		"react/jsx-props-no-spreading": 0,
		"react/state-in-constructor": "off",
},
}
