# Editing Guide

このサイトは，`index.html` を中心にした1ページ構成で運用します．

退避済みの `_multi_file_version_20260522/` は旧構成の保存用なので，通常運用では編集しません．

## 1. 基本的にあまり変えない部分

- 氏名
- 所属
- 写真
- ナビゲーション
- サイト全体の見出しや構成

主な対象ファイル:

- `index.html`
- `styles.css`

## 2. ときどき見直す部分

- 研究分野
- 研究キーワード
- 研究紹介文
- 略歴
- CV 要約

主な対象ファイル:

- `index.html`
- `styles.css`

## 3. 随時更新する部分

- 論文
- 発表
- 受賞
- 連絡先

主な対象ファイル:

- `data/publications.json`
- `data/awards.json`
- `index.html`

## 最小運用ルール

- `index.html` に Home, Profile, Research, Publications, CV, Contact をまとめて持たせる
- セクション追加より前に，既存セクションへ統合できないかを先に考える
- 論文・発表・受賞は，HTML ではなく `data/*.json` を更新する
- 連絡先や外部リンクは，公開して問題ない情報だけに限定する
- `_multi_file_version_20260522/` は参照用として残し，現行サイトの編集対象にしない

## NOTE の見方

- `<!-- NOTE: ... -->` は，書き換えを想定している場所です
- まず `index.html` の NOTE を埋めると，全体が整いやすくなります
- 論文や受賞の更新は `data/*.json` を優先します
