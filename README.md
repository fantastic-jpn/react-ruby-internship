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

docker コンテナ内で行う（backend）
model の追加（db のテーブルを宣言するときに使用する）
rails generate model {モデル名} {カラム名 1}:{型} {カラム名 2}:{型} {カラム名 3}:{型} ...
db/migrate/に追加される

rails db:migrate 　-> app/models に{モデル名}.rb が追加される
(なんか自分で追加した。)

controller の追加（モデル追加後にする）
rails generate controller {モデル名} -> app/controllers に {モデル名}\_controllers.rb が追加される
(なんか自分で関数追加する)
よくわからんからコピペ

routes の追加 (config/routes.rb を編集)
resources :{モデル名} この url に飛んできたときにどの関数を読みだすかことが可能かを決める
(よくわからんけどコピペ)

違う Docker container からの接続をしたい場合、config/environment/development.rb に以下を追加
confg.hosts << "{docker container の　サービス名}"
（いったんやってる）

作成した routes (path) の一覧を見たいとき
rails routes

データベース初期化
rails db:drop && rails db:create && rails db:migrate

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

ちがう docker container に情報を送りたい場合
fetch("http://{送りたい docker container の サービス名}:{外部 docker container のポート番号}/{ruby 側で作成した path}", {送りたいオブジェクト})

---

# React-Ruby Fullstack Project Setup Instructions

This project is a full-stack application using React for the frontend and Ruby on Rails for the backend. Follow the steps below to set up your development environment!

---

## Backend Setup

1. **Build the Docker image**

   ```bash
   docker compose build
   ```

2. **Start the Docker container**

   ```bash
   docker compose up
   ```

3. **Access the backend Docker container**

   ```bash
   docker exec -it <container_id> /bin/bash
   ```

4. **BInstall Bundler and resolve dependencies**

   ```bash
   gem install bundler && bundle install
   ```

5. **Create a new Rails project**

   ```bash
   rails new . --api -d mysql
   ```

6. **Update database configuration**

- Edit the `config/database.yml` file to set:
  - Database password
  - Hostname to the Docker DB container service name

7. **Create and migrate the database**

   ```bash
   rails db:create && rails db:migrate
   ```

8. **Start the Rails server**

   ```bash
   rails s -b '0.0.0.0'
   ```

9. **Verify the backend in your browser**

- Open `http://localhost:3000` in your browser.

---

## Frontend Setup

1. **Navigate to the frontend directory inside the Docker container**

   ```bash
   cd match-app
   ```

2. **Install dependencies**

   ```bash
   npm i
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Verify the frontend in your browser**

- Open `http://localhost:3001` in your browser.
