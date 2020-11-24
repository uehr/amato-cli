#!/usr/bin/env node
import amato from "amato"
import argv from "argv"
import process from "process"
import path from "path"
import { promises } from "fs"
import fse from "fs-extra"
const fs = promises
const info_prefix = "■"

argv.option({
    name: "style",
    short: "s",
    type: "string",
    description: "Choose a design template.",
    example: "amato-cli example.md -s your-favorite-style"
})

argv.option({
    name: "output",
    short: "o",
    type: "string",
    description: "Choose a output directory.",
    example: "amato-cli example.md -o artifacts"
})

async function main() {
    const arg = argv.run()
    const markdown_file_path = arg.targets[0]
    if (markdown_file_path == null) {
        argv.help()
        process.exit(0)
    }

    console.log("Generating slides.")

    const style_name = arg.options["style"] || "default"
    const output_dir = arg.options["output"] || "."
    const output_name = path.basename(markdown_file_path, ".md")
    const output_path = `${output_dir}/${output_name}.html`
    const html_converter = new amato()
    const markdown = await fs.readFile(markdown_file_path, "utf-8")
    const generated_html = await html_converter.convert(markdown, style_name)

    await fse.outputFile(output_path, generated_html)

    console.log(`${info_prefix} Source: ${markdown_file_path}`)
    console.log(`${info_prefix} Output: ${output_path}`)
    console.log(`${info_prefix} Style: ${style_name}`)
    console.log("Complate.")
}

main()