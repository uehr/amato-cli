#!/usr/bin/env node
import amato from "amato"
import argv from "argv"
import process from "process"
import path from "path"
import { promises } from "fs"
import fse from "fs-extra"
const fs = promises
const info_prefix = "■"

argv.version("v1.0.3");

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

argv.option({
    name: "style-list",
    short: "l",
    type: "string",
    description: "The list of styles.",
    example: "amato-cli --style-list"
})

async function main() {
    const arg = argv.run()
    const Amato = new amato()

    if (arg.options["style-list"]) {
        console.log(`${info_prefix} styles:`)
        const style_names = await Amato.getDesignNames()
        style_names.forEach(style => {
            console.log(" - " + style)
        })
        return
    }

    const markdown_file_path = arg.targets[0]
    if (arg.targets[0] == null) {
        argv.help()
        return
    }

    console.log("Generating slides.")

    const style_name = arg.options["style"] || "default"
    const output_dir = arg.options["output"] || "."
    const output_name = path.basename(markdown_file_path, ".md")
    const output_path = `${output_dir}/${output_name}.html`
    const markdown = await fs.readFile(markdown_file_path, "utf-8")
    const generated_html = await Amato.convert(markdown, style_name)

    await fse.outputFile(output_path, generated_html)

    console.log(`${info_prefix} Source: ${markdown_file_path}`)
    console.log(`${info_prefix} Output: ${output_path}`)
    console.log(`${info_prefix} Style: ${style_name}`)
    console.log("Complate.")
}

main()