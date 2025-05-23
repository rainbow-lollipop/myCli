#!/usr/bin/env node
const { program } = require("commander");
const { helpOptions } = require("./core/help-options");
const createProjectCommand = require("./core/actions/create-project");
const createCompCommand = require("./core/actions/create-comp");

// 增加其他 option 操作
helpOptions();

// 增加功能操作
createProjectCommand(); // 创建项目
createCompCommand(); // 创建组件

// 解析参数
program.parse(process.argv);
// 获取额外传递的参数
// console.log("aaaaa", program.opts().dir);
