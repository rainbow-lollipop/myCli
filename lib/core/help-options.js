const { program } = require("commander");

function helpOptions() {
	const version = require("../../package.json").version;
	program.version(version, "-v, --version");

	program.option("-m --mine", "my first cli program");
	program.option("-d --dir <dir>", "example: -d ./src");

	// 监听 help 事件
	program.on("--help", () => {
		console.log("");
		console.log("others:");
		console.log("  example1");
		console.log("  example2");
	});
}

module.exports = {
	helpOptions,
};
