# React-Ruby Fullstack プロジェクトセットアップ手順

このプロジェクトは、React をフロントエンド、Ruby on Rails をバックエンドとして使用したフルスタックアプリケーションだよ！以下の手順に従って、開発環境をセットアップしてね！

---

## バックエンド環境セットアップ

1. **Docker イメージをビルド**
   ```bash
   docker compose build
   ```

2. **Docker コンテナを起動**
   ```bash
   docker compose up
   ```

3. **バックエンド用 Docker コンテナに入る**
   ```bash
   docker exec -it <container_id> /bin/bash
   ```

4. **Bundler をインストールし、依存関係をインストール**
   ```bash
   gem install bundler && bundle install
   ```

5. **Rails プロジェクトを作成**
   ```bash
   rails new . --api -d mysql
   ```

6. **データベース設定を変更**
   `config/database.yml` ファイルのデータベースパスワードとホスト設定を Docker データベースコンテナのサービス名に変更します。

7. **データベースを作成し、マイグレーションを実行**
   ```bash
   rails db:create && rails db:migrate
   ```

8. **Rails サーバーを起動**
   ```bash
   rails s -b '0.0.0.0'
   ```

9. **ローカルコンピュータから localhost:3000 にアクセス**
   ブラウザで `localhost:3000` にアクセスします。

---

## フロントエンド環境セットアップ

1. **Docker コンテナ内のターミナルで match-app ディレクトリに移動し、依存関係をインストール**
   ```bash
   cd match-app && npm i
   ```

2. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

3. **ローカルコンピュータから localhost:3001 にアクセス**
   ブラウザで `localhost:3001` にアクセスします。

