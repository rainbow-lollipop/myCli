const { spawn } = require("child_process"); // node子进程，帮助我们执行命令

function execCommand(...args) {
	return new Pormise((resolve) => {
		// 开启子进程，执行命令
		const childProcess = spawn(...args);
		// 获取子进程的输出和错误信息
		childProcess.stdout.pipe(process.stdout);
		childProcess.stderr.pipe(process.stderr);
		// 监听子进程执行结束，关闭
		childProcess.on("close", () => {
			resolve();
		});
	});
}

module.exports = execCommand;
