# What's amATO
- amATO / あまと
- プレゼンテーションツール
- Markdownで書いたプレゼン資料を**お手軽**にリッチなスライド資料へ
- お手軽にスライドデザインを切り替えられる

# Demo
[Demo Page](https://uehr.s3-ap-northeast-1.amazonaws.com/amato-demo.html)

# Installation
```bash
$ npm install amato-cli
```

# Usage

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

# Develop
- Author: [@uehr37](https://twitter.com/uehr37)
- License: MIT
- Repository: [github/amato-cli](https://github.com/uehr/amato-cli)