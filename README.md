# 自己紹介ページテンプレート
![GitHub Pages Status](https://img.shields.io/github/actions/workflow/status/yunkai1841/profile-template/pages.yml)

## テンプレートの使い方

1. 環境構築する  
npmがない場合は[こちら](https://nodejs.org/ja/download/)からインストールしてください。
```bash
git clone https://github.com/yunkai1841/profile-template.git
cd profile-template
yarn install # or npm install
```

2. 本文を編集する  
`public/main.md`を編集してください。
本文として表示されます。

3. 画像を追加する  
`public/images`の画像を差し替えてください。  
もとの画像の解像度は参考です。変更しても構いません。
  - `photo_landscape.jpg`：横長の写真
  - `photo_portrait.jpg`：縦長の写真

4. SNSのリンクを追加する  
`index.html`のsocial icons以下を編集してください。
`<a>`タグの`href`属性を変更することでリンクを変更できます。
必要のないリンクは削除してください。

5. 確認する
```bash
yarn dev # or npm run dev
```

6. ビルドする
```bash
yarn build # or npm run build
```

7. デプロイする  
`dist`ディレクトリをデプロイしてください。


## GitHubで管理したい場合

このリポジトリはテンプレートリポジトリとして作成されていますので、
GitHubの`Use this template`ボタンからリポジトリを作成してください。
