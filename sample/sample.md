# Sample Slide [[fab fa-slideshare]]<<.title.blur>>
by amATO<<.blur>>

---
# What's amATO[[fas fa-question fa-rotate]]<<.headline>>
- amATO / あまと
- プレゼンテーションツール
- Markdownで書いたプレゼン資料を**お手軽**にリッチなスライド資料へ
- お手軽にスライドデザインを切り替えられる

---
# Demo[[fas fa-question fa-rotate]]<<.headline>>
# このスライド自身

---
# Installation[[fas fa-spinner fa-rotate]]<<.headline>>
# npmパッケージとして公開
```bash
$ npm install amato-cli
```

---
# Usage[[fas fa-cat fa-rotate]]<<.headline>>

1. Markdownで資料作成

```markdown:sample/sample.md
# This is sample
## slide1 :)
---
## slide2 :X
---
## slide3 :D
```

2. MarkdownファイルをHTMlへ変換

```bash
$ amato-cli sample/sample.md -o sample
Generating slides.
■ Source: sample/sample.md
■ Output: sample/sample.html
■ Style: default
Complate.
```

3. 生成された**htmlファイル**をブラウザで開く
```bash
$ open sample.html
```

---
# Develop[[fas fa-user fa-rotate]]<<.headline>>
- Author: [@uehr37](https://twitter.com/uehr37)
- License: MIT
- Repository: [github/amato-cli](https://github.com/uehr/amato-cli)