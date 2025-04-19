const path = require("path");
const ejs = require("ejs");

function compileEjs(templateName, data) {
	return new Promise((resolve, reject) => {
		// 获取模板路径
		const templatePath = `../template/${templateName}`;
		const absolutePath = path.resolve(__dirname, templatePath);

		// 使用ejs编译模板
		ejs.renderFile(absolutePath, data, (err, result) => {
			if (err) {
				console.log("编译模板失败:", err);
				reject(err);
				return;
			}
			resolve(result);
		});
	});
}

module.exports = compileEjs;
