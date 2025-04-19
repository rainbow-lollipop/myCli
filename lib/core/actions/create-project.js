const { program } = require("commander");
const { promisify } = require("util");
const execCommand = require("../../utils/exec-command");
const downloadGitRepo = promisify(require("download-git-repo"));

function createProjectCommand() {
	program
		.command("create <project-name> [...args]")
		.description("create a new project")
		.action(createProject);
}

async function createProject(projectName) {
	const repo = "direct:https://github.com/rainbow-lollipop/Promise-HandWriting.git#main";
	try {
		await downloadGitRepo(repo, projectName, { clone: true });
		const commandName = process.platform === "win32" ? "npm.cmd" : "npm";
		console.log("🚀 ~ createProject ~ process.platform:", process.platform);
		// 帮助执行 npm install
		// await execCommand(commandName, ["install"], { cwd: `./${projectName}` });
		// 帮助执行 npm run dev
		// await execCommand(commandName, ["run", "dev"], { cwd: `./${projectName}` });
	} catch (error) {
		console.log("异常：" + error);
	}
}

module.exports = createProjectCommand;
