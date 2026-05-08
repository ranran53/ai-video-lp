# Codexスマホ入門LP

スマホだけでCodexをやさしく始めるための、初心者向けランディングページです。  
`images/design-reference.png` の完成見本を基準に、不思議の国のアリス風・絵本風の縦長1枚LPとして読める見た目に寄せています。

## 今回のLP構成

PCでもスマホ用LPとして見えるように、ページ全体の最大幅は `430px` に固定し、PCでは中央寄せにしています。スマホでは横幅いっぱいで表示されます。

1. **ファーストビュー**
   - `images/hero.png` を大きく配置。
   - 画像内のCTA位置に、本物のリンクボタン「Codex入門を見る」を重ねています。
2. **Codexでできること**
   - `images/feature-smartphone.png`
   - `images/feature-guide.png`
   - `images/feature-post.png`
   - `images/feature-lp.png`
   - 上記4枚を2列グリッドで大きめに表示し、HTML側の説明文は追加していません。
3. **悩みセクション**
   - `images/worry-section.png` を青背景の横長パネルとして大きく表示。
   - 画像と同じ悩みリストをHTMLで重複表示しない構成です。
4. **詳細のできること**
   - `images/detail-features.png` を横幅いっぱいのパネルとして表示。
   - 余計なタグ・ボタン・説明カードは追加していません。
5. **4ステップ**
   - `images/steps.png` を横幅いっぱいに表示。
   - ステップ文言は画像内にあるため、HTML側でリストを重複表示していません。
6. **最後のCTA**
   - `images/final-cta.png` を横長CTAとして表示。
   - 画像内のCTA位置に、本物のリンクボタン「Codex入門を見る」を重ねています。
   - `images/character-main.png` は完成見本の世界観を補う薄い装飾として、最後のCTA付近に小さく配置しています。

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

## 画像の使い方

- `images/design-reference.png` は完成見本です。LPには直接表示せず、余白・角丸・色・セクション順・画像サイズ感の基準として使います。
- 各素材画像は小さなサムネイルではなく、スマホ幅で読みやすい大きさにしています。
- 横長セクション画像は、素材内の上下余白が大きいため、`style.css` の `.crop-frame` 系クラスで完成見本に近い横長パネルとして見えるようにトリミング表示しています。
- 画像内に含まれる文章をHTMLで繰り返さないようにし、HTMLテキストはCTAリンクとアクセシビリティ用の `alt` を中心にしています。

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
   - `images/design-reference.png` のような縦長1枚LP感があるか
   - 画像が小さすぎず、素材内の文字が読めるか
   - セクション間の余白が広すぎないか
   - CTAボタンが指で押しやすい大きさか
   - 最後のCTAが画面下で見切れていないか
   - 絵本風・アリス風の淡いクリーム、ブルー、くすみピンクの世界観が保たれているか

## GitHub Pagesで公開するときの確認ポイント

- リポジトリ直下に `index.html` があることを確認します。
- `images/` フォルダがリポジトリに含まれていることを確認します。
- GitHub の `Settings` → `Pages` で公開ブランチとフォルダを選択します。
- 公開後のURLで画像・CSS・JavaScriptが読み込まれているか確認します。
- CTAリンクが本番用のnoteページや商品ページに差し替わっているか確認します。
