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
  const componentFile = path.join(componentsPath, `${componentName}.vue`);
  const targetFile = path.join(projectPath, `${componentName}.vue`);

  if (fs.existsSync(componentFile)) {
    fs.copyFileSync(componentFile, targetFile);
    console.log(`✅ Component ${componentName} added to components/ui`);
  } else {
    console.error(`❌ The component ${componentName} doesn't exist.`);
  }
} else {
  console.log("Used: npx @better/vue add <componente>");
}
