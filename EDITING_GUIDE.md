# Editing Guide

このサイトは，次の3種類に分けて更新すると管理しやすくなります．

## 1. 基本的にあまり変えない部分

- 氏名
- 所属
- 写真
- ナビゲーション
- サイト全体の見出しや構成

主な対象ファイル:

- `index.html`
- `profile/index.html`
- `styles.css`

## 2. ときどき見直す部分

- 研究分野
- 研究キーワード
- 研究紹介文
- 略歴

主な対象ファイル:

- `index.html`
- `profile/index.html`
- `research/index.html`

## 3. 随時更新する部分

- 論文
- 発表
- CV
- 連絡先
- 受賞

主な対象ファイル:

- `data/publications.json`
- `data/awards.json`
- `cv/index.html`
- `contact/index.html`

## 最小運用ルール

- `index.html` は短い自己紹介だけに保つ
- `profile/index.html` は固定情報の置き場にする
- `publications/index.html` を一番更新頻度の高いページとして使う
- `cv/index.html` と `contact/index.html` は，情報確定後に埋める
- 論文・発表・受賞は，HTML ではなく `data/*.json` を更新する

## NOTE の見方

- `<!-- NOTE: ... -->` は，書き換えを想定している場所です
- まず `index.html` と `profile/index.html` の NOTE を埋めると，全体が整いやすくなります
- 次に `research/index.html` と `publications/index.html` を更新するのが自然です
