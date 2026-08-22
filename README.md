# Lexical HTML - Sandbox

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)

---

Lexical、React、Vite を使って構築された Markdown エディタのサンドボックス実装です。GitHub Pages によるデプロイ先（ライブデモ）が用意されています。

概要:
- エディタは Lexical をベースにし、Markdown のショートカットやリッチテキスト機能を提供します。
- リポジトリには開発用スクリプトと本番ビルドの設定（Vite）が含まれています。

## 主な機能

- リッチテキスト編集: 見出し、リスト、引用、コードブロック、リンクのサポート。
- Markdown ショートカット: 見出しやリストなどのショートカット入力をサポート。
- ツールバー: 太字、斜体、下線、コード、ダウンロード等の操作を備えたツールバー。
- ローカル保存:
  - 自動保存: ブラウザのローカルストレージへの自動保存。
  - ダウンロード: コンテンツを Markdown (`.md`) としてエクスポート可能。
- デバッグツール: Lexical のノード構造を可視化する Tree View。
- レスポンシブデザイン: CSS によるクリーンでモダンな UI。

## デモ

ライブデモ:

https://watanabe3tipapa.github.io/lexical-html/

## 開始方法

前提条件:

- Node.js (v14 以上)
- npm

インストールと起動 (既存 README に記載の手順):

1. リポジトリをクローンします:

```bash
git clone https://github.com/watanabe3tipapa/lexical-html.git
cd lexical-html
```

2. 依存関係をインストールします:

```bash
npm install
```

3. 開発サーバーを起動します:

```bash
npm run dev
```

4. ブラウザで開きます（既存 README にある案内）:

`http://localhost:5173/lexical-html/`

（上記のパスは既存 README に記載されています）

## 本番用ビルド

本番用ビルドを作成するには:

```bash
npm run build
```

ローカルでビルドのプレビューを行うには:

```bash
npm run preview
```

## リポジトリ構成（主要ファイル・ディレクトリ）

- index.html
- src/  (ソースコード)
- dist/ (ビルド成果物)
- package.json
- vite.config.js
- LICENSE
- README.md

## 開発・保守状態

- このリポジトリは GitHub Pages にデプロイされたデモを持ちます（homepage 設定あり）。
- リポジトリはアーカイブされていません（archived: false）。

## ライセンス

このプロジェクトは MIT ライセンスの下で配布されています。詳細はリポジトリ内の LICENSE ファイルを参照してください。

---
