
module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true, 
    // 脚本运行环境
    env: {
        "browser": true,
        "node": true, // webpack所以需要node一些环境变量
        "es6": true
    },
    // 额外的全局变量
    globals: {
        react: true
    },
    // 所有的规则默认都是禁用的。在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题
    extends: [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/all"
    ],
    // ESLint 默认使用Espree作为其解析器，平常项目中我一般使用@typescript-eslint/parser作为parser。
    parser: "@typescript-eslint/parser",
    // 通常输出规则。一些插件也可以输出一个或多个命名的配置。ESLint 支持使用第三方插件。在使用插件之前，你必须使用 npm 安装它。插件名称可以省略 eslint-plugin- 前缀
    plugins: ["@typescript-eslint", "react"],
    // 开启规则和发生错误时报告的等级
    rules: {
        "no-console": "off",
        "@typescript-eslint/no-var-requires": "off",
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "@typescript-eslint/indent": ["error", 2, {'baseIndent': 1}],
    }
}
