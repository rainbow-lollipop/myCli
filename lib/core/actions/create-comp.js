const { program } = require("commander");
const compileEjs = require("../../utils/compile-ejs");
const writeFile = require("../../utils/write-file");
const fs = require("fs");

function createCompCommand() {
	program
		.command("addCpn <comp-name> [...args]")
		.description("add a new comp into folder")
		.action(createComp);
}

async function createComp(compName) {
	// 创建一个组件，根据模板填充数据
	const result = await compileEjs("TestComponent.vue.ejs", { msg: compName });
	const dir = program.opts().dir || `src/componetns`;
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}
	// 将结果写入对应文件中
	await writeFile(`${dir}/${compName}.vue`, result);
	console.log("创建组件成功:", compName);
}

module.exports = createCompCommand;
