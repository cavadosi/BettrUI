import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const args = process.argv.slice(2);
const command = args[0];
const componentName = args[1];

const componentsPath = path.resolve(__dirname, "../components");
const projectPath = path.resolve(process.cwd(), "components/ui");

if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath, { recursive: true });
}

if (command === "add" && componentName) {
  const componentFile = path.join(componentsPath, `${componentName}.tsx`);
  const targetFile = path.join(projectPath, `${componentName}.tsx`);

  if (fs.existsSync(componentFile)) {
    fs.copyFileSync(componentFile, targetFile);
    console.log(`✅ Componente ${componentName} añadido en components/ui/`);
  } else {
    console.error(`❌ El componente ${componentName} no existe.`);
  }
} else {
  console.log("Uso: npx @my-ui-library add <componente>");
}
