#!/usr/bin/env node
const { program } = require("commander");
const { helpOptions } = require("./core/help_options");

// 增加其他 option 操作
helpOptions();

// 解析参数
program.parse(process.argv);
// 获取额外传递的参数
// console.log("aaaaa", program.opts().dir);
