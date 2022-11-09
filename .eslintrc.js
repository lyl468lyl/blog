module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
		'vue/multi-word-component-names': 0, // 关闭组件名必须为驼峰
		indent: ['error', 'tab'], // 使用tab缩进
		quotes: [2, 'single'], // 使用单引号
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 5, //标签超出5个属性就会换行
			},
		],
	},
  overrides: [
    {
      files: ['*.md'],
      parser: 'eslint-plugin-markdownlint/parser',
      extends: ['plugin:markdownlint/recommended']
    }
  ]
}
