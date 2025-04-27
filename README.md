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

## 参考

- フロントエンド：Next.js
- バックエンド：Ruby on Rails (APIモード)
- データベース：MySQL
- コンテナ管理：Docker Compose



- モデル、コントローラー、ルーティングを設定してAPIを作成。
- `render json:`でデータを返す。
2. フロントエンド:
- `fetch`や`axios`でAPIにリクエストを送信。
- 取得したデータをReactのステートに保存して表示。
