# What's amATO
- amATO / あまと
- Presentation tool.
- Easily turn Markdown presentations into rich slides.

# Demo
[Demo Page](https://uehr.s3-ap-northeast-1.amazonaws.com/amato-demo.html)

# Installation
```bash
$ npm install amato-cli
```

# Usage

1. Writing markdown.

```markdown:sample/sample.md
# This is sample
## slide1 :)
---
## slide2 :X
---
## slide3 :D
```

2. Convert Markdown to html.

```bash
$ amato-cli sample/sample.md -o sample
Generating slides.
■ Source: sample/sample.md
■ Output: sample/sample.html
■ Style: default
Complate.
```

3. Open the generated html file in the browser
```bash
$ open sample.html
```

# amato-cli --help

```
Usage: amato-cli [options]

	--help, -h
		Displays help information about this script
		'amato-cli -h' or 'amato-cli --help'

	--version
		Displays version info
		amato-cli --version

	--style, -s
		Choose a design template.
		amato-cli example.md -s your-favorite-style

	--output, -o
		Choose a output directory.
		amato-cli example.md -o artifacts

	--style-list, -l
		The list of styles.
		amato-cli --style-list
```

# Develop
- Author: [@uehr37](https://twitter.com/uehr37)
- License: MIT
- Repository: [github/amato-cli](https://github.com/uehr/amato-cli)