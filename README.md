# Codexスマホ入門LP

スマホだけでCodexをやさしく始めるための、初心者向けランディングページです。

## LPの表示方針

このLPは、完成デザインである `images/design-reference.png` をメイン画像として1枚で表示しています。  
HTML/CSSで各セクションを再構成したり、分解画像を並べたりせず、完成画像を上から下まで見切れないように表示する構成です。

- LP本体画像: `images/design-reference.png`
- PC表示: 最大幅 `430px` のスマホLPとして中央寄せ
- スマホ表示: 画面幅いっぱいに表示
- 画像は `width: 100%; height: auto; display: block;` で表示
- 高さ固定、トリミング、`object-fit: cover`、`overflow: hidden` は使用していません

## CTAリンクについて

CTAは画像上のボタンに、透明リンクを重ねてクリック可能にしています。

- 1つ目: ファーストビュー内の「Codex入門を見る」ボタン上
- 2つ目: 最下部の「Codex入門を見る」ボタン上

CTAリンク先は `index.html` 内の透明リンクで指定しています。

現在のリンク先は `https://note.com/pinapina53` です。

```html
<!-- CTAリンク先 -->
<a class="lp-cta-link lp-cta-link--first" href="https://note.com/pinapina53" aria-label="Codex入門を見る"></a>
```

## 画像を差し替える場合

LP画像を差し替える場合は、`images/design-reference.png` を同じ名前で置き換えてください。  
画像サイズやボタン位置が変わる場合は、`style.css` の以下のクラスにある `top` / `left` / `width` / `height` のパーセント指定を、新しい画像内のCTA位置に合わせて調整してください。

- `.lp-cta-link--first`
- `.lp-cta-link--final`

## 使用していない画像について

以下の画像は `images` フォルダに残っていますが、LP表示には使用していません。

- `images/hero.png`
- `images/character-main.png`
- `images/feature-smartphone.png`
- `images/feature-guide.png`
- `images/feature-post.png`
- `images/feature-lp.png`
- `images/worry-section.png`
- `images/detail-features.png`
- `images/steps.png`
- `images/final-cta.png`

## 画像キャッシュについて

公開ページで画像が古いまま表示される場合は、画像URL末尾の `?v=` の値を変更すると、ブラウザやCDNのキャッシュを回避して新しい画像を読み込ませることができます。

例: `images/design-reference.png?v=35f683d` の `35f683d` 部分を新しい値に変更します。

## ローカル確認方法

1. ローカルサーバーを起動します。

```bash
python3 -m http.server 8000
```

2. ブラウザで `http://localhost:8000/` を開きます。
3. Chrome DevTools のデバイスツールバーで幅を `390px` にします。
4. 次の点を確認してください。
   - `images/design-reference.png` が1枚で大きく表示されているか
   - 画像が上から下まで見切れていないか
   - 横にはみ出していないか
   - 下部CTAまで全部表示されるか
   - 分解画像が表示されていないか
   - 余計なHTMLテキストが表示されていないか
   - PCでは中央にスマホ幅で表示されるか
   - 透明リンク2か所がタップできるか
