import { exec } from "child_process";

export async function parsePythonCode(code:string) {
  code = convertToTerminalCode(code)
  return new Promise((resolve, reject) => {
    const command = `conda activate salesbotapi && python -c "import ast,json;print(json.dumps(ast.dump(ast.parse('${code}'))))"`;
    const childProcess = exec(command, (err, stdout, stderr) => {
      if (err) {
        console.error("Error executing command:", err);
        reject(err);
      } else if (stderr) {
        console.error("Error in Python execution:", stderr);
        reject(stderr);
      } else {
        const astData = stdout.trim();
        resolve(astData);
      }
    });
    childProcess.on('exit', (code, signal) => {
      if (code !== 0) {
          reject(`Subprocess exited with code ${code}`);
      }
      console.log("Subprocess exited successfully");
  });
  });
}

function convertToTerminalCode(userCode:string) {
  const lines = userCode.split('\n');
  
  const terminalLines = lines.map((line, index) => {
      if (lines.length === 1 && line.trim().endsWith(';')) {
          return line; 
      }
      else if (index === lines.length - 1 && line.trim().endsWith(':')) {
          return line; 
      } else {
          return line + ';'; 
      }
  });
  
  const terminalCode = terminalLines.join('');
  return terminalCode;
}
