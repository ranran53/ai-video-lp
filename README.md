# Codexスマホ入門LP

スマホだけでCodexをやさしく始めるための、初心者向けランディングページです。  
不思議の国のアリス風の絵本らしい世界観で、スマホ閲覧を最優先にしています。

## ファイル構成

```txt
index.html
style.css
script.js
images/
  design-reference.png
  hero.png
  character-main.png
  feature-smartphone.png
  feature-guide.png
  feature-post.png
  feature-lp.png
  worry-section.png
  detail-features.png
  steps.png
  final-cta.png
```

## 画像の差し替え方法

1. `images/` フォルダ内の画像を、同じファイル名で上書きします。
2. ファイル名を変える場合は、`index.html` 内の `src="images/〇〇.png"` を新しいファイル名に変更します。
3. 画像が読み込めない場合でも大きく崩れないように、各画像枠には背景色と比率を設定しています。
4. `images/design-reference.png` は完成イメージの参考用です。LPには直接表示していません。

## CTAリンクの変更方法

CTAボタンのリンクは、`script.js` の先頭にある `CTA_LINK` を変更してください。

```js
const CTA_LINK = "https://note.com/";
```

JavaScriptが読み込めない環境でもリンクとして動くように、`index.html` 側の `href` にも仮のURLを入れています。公開前に必要であれば、`index.html` の `data-cta-link` が付いたリンクの `href` も同じURLへ変更してください。

## スマホ確認方法

1. ローカルサーバーを起動します。

```bash
python3 -m http.server 8000
```

2. ブラウザで `http://localhost:8000/` を開きます。
3. Chrome DevTools のデバイスツールバーで幅を `390px` にします。
4. 次の点を確認してください。
   - 文字が小さすぎないか
   - セクション間の余白が詰まりすぎていないか
   - CTAボタンが指で押しやすい大きさか
   - 最後のCTAが画面下で見切れていないか
   - 画像が読み込めない場合でも本文が読めるか

## GitHub Pagesで公開するときの確認ポイント

- リポジトリ直下に `index.html` があることを確認します。
- `images/` フォルダがリポジトリに含まれていることを確認します。
- GitHub の `Settings` → `Pages` で公開ブランチとフォルダを選択します。
- 公開後のURLで画像・CSS・JavaScriptが読み込まれているか確認します。
- CTAリンクが本番用のnoteページや商品ページに差し替わっているか確認します。
