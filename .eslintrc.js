
module.exports = {
    //此项是用来告诉eslint找当前配置文件不能往父级查找
    root: true, 
    "env": {
      "browser": true,
      "es6": true
    },
    // 所有的规则默认都是禁用的。在配置文件中，使用 "extends": "eslint:recommended" 来启用推荐的规则，报告一些常见的问题
    "extends": [
        "airbnb-base",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/all"
    ],
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint", "react"],
    rules: {
        "no-console": "off",
        "@typescript-eslint/indent": ["error", 2],
    }
}

