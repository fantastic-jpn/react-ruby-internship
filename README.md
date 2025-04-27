# プロジェクト起動手順

このプロジェクトは、**Next.js (frontend)** と **Ruby on Rails (backend)** を Docker Compose で管理しています。

## 起動手順

1. **リポジトリをクローン**

   ```bash
   git clone <このリポジトリのURL>
   cd <プロジェクト名>
   ```

2. **`db-data` ディレクトリを作成**

   MySQLのデータ永続化用ディレクトリを作成します。

   ```bash
   mkdir db-data
   ```

   ※ `docker-compose.yml`と同じ階層に作成してください。

3. **Dockerコンテナを起動**

   ```bash
   docker compose up --build
   ```

4. **バックエンド(Rails)コンテナに入る**

   別ターミナルを開いて、Railsのコンテナに入ります。

   ```bash
   docker compose exec backend bash
   ```

5. **データベース作成とマイグレーション**

   コンテナ内で以下を実行します。

   ```bash
   rails db:create
   rails db:migrate
   ```

6. **Railsサーバーを起動**

   後続して Rails サーバーを起動します。

   ```bash
   rails s -b '0.0.0.0'
   ```

7. **ブラウザで Railsが起動しているか確認**

   ローカルブラウザで

   ```
   http://localhost:3000
   ```

   を開き、Railsの答符が見られることを確認します。

8. **フロントエンド(Next.js)コンテナに入る**

   別のターミナルを開き、Next.jsのコンテナに入ります。

 ```bash
   docker compose exec frontend bash
   ```

9. **Next.jsパッケージをインストール**

   フロントエンドのコンテナで、プロジェクトフォルダに移動し、npmパッケージをインストールします。

   ```bash
   cd match-app
   npm install
   ```

10. **Next.jsアプリを起動**

    ```bash
      npm run dev
    ```

11. **ブラウザで Next.jsが起動しているか確認**

    ローカルブラウザで

    ```
      http://localhost:3001
    ```

    を開き、Next.jsの画面が表示されることを確認します。

---
#動作確認方法
1. まず、右上の「アカウント追加」を押し、アカウントを追加
2. 右上の「企業様はこちら」で企業用のアカウントを追加
3. ふたつできた時点で、左下にユーザーの情報が表示されているのを確認してから、「go to chat」ボタンをおすと、チャットページに飛ぶ
4. テキスト欄にメッセージを書き、「send」ボタンを押すと、企業側からチャットを送信することができる
---

#できなかったところ
1. ユーザーログイン時に専用ページに飛び、企業とコンタクトがとれる状態を作りたかったが、かなわなかった。
2. 企業側からメッセージを送信することはできるが、ユーザーがそれを確認することは現状できない 

