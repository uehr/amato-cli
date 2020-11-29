# Sample Slide [[fab fa-slideshare]]<<.title.blur>>
by amATO<<.blur>>

---
# What's amATO[[fas fa-question fa-rotate]]<<.headline>>
- amATO / あまと
- Presentation tool.
- Easily turn Markdown presentations into rich slides.

---
# Demo[[fas fa-question fa-rotate]]<<.headline>>
# This slide.

---
# Installation[[fas fa-spinner fa-rotate]]<<.headline>>
```bash
$ npm install amato-cli
```

---
# Usage[[fas fa-cat fa-rotate]]<<.headline>>

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

---
# Source for this slides[[fab fa-slideshare fa-rotate]]<<.headline>>
```markdown:sample.md
# Sample Slide [[fab fa-slideshare]]<<.title.blur>>
by amATO<<.blur>>

---
# What's amATO[[fas fa-question fa-rotate]]<<.headline>>
- amATO / あまと
- Presentation tool.
- Easily turn Markdown presentations into rich slides.

---
# Demo[[fas fa-question fa-rotate]]<<.headline>>
# This slide.

---
# Installation[[fas fa-spinner fa-rotate]]<<.headline>>
```bash
$ npm install amato-cli

・・・・・・・・・・・・
```

---
# Develop[[fas fa-user fa-rotate]]<<.headline>>
- Author: [@uehr37](https://twitter.com/uehr37)
- License: MIT
- Repository: [github/amato-cli](https://github.com/uehr/amato-cli)