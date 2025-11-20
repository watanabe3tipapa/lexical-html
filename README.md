# Lexical HTML - Sandbox

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-0.1.0-green.svg)

---


[Lexical](https://lexical.dev/)、[React](https://react.dev/)、[Vite](https://vitejs.dev/) で構築された Markdown エディタです。
GitHub Pages に自動デプロイされます。

## 機能

- **リッチテキスト編集**: 見出し、リスト、引用、コードブロック、リンクをサポート。
- **Markdown サポート**: 完全な Markdown ショートカットのサポート（例: 見出しには `#`、リストには `*`）。
- **ツールバー**: 太字、斜体、下線、コード、ダウンロードのアイコンを備えた直感的なツールバー。
- **ローカル保存**:
  - **自動保存**: コンテンツはブラウザのローカルストレージに自動的に保存されます。
  - **ダウンロード**: コンテンツを Markdown (`.md`) ファイルとしてエクスポートできます。
- **デバッグツール**: 基礎となる Lexical ノード構造を可視化する統合された **Tree View**。
- **レスポンシブデザイン**: CSS でスタイル設定されたクリーンでモダンな UI。

## デモ

[ライブデモ](https://watanabe3tipapa.github.io/lexical-html/)

## 始め方

### 前提条件

- Node.js (v14 以上)
- npm

### インストール

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

4. ブラウザを開き、`http://localhost:5173/lexical-html/` にアクセスします。

## 本番用ビルド

本番用ビルドを作成するには:

```bash
npm run build
```

本番用ビルドをローカルでプレビューするには:

```bash
npm run preview
```

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

---


