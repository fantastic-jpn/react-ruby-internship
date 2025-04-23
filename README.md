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
### note

docker コンテナ内で行う（backend）
model の追加（db のテーブルを宣言するときに使用する）
```bash
rails generate model {モデル名} {カラム名 1}:{型} {カラム名 2}:{型} {カラム名 3}:{型} ...
```
`db/migrate/`に追加される

```bash
rails db:migrate
```
`app/models`に`{モデル名}.rb`が追加される
(なんか自分で追加した。)

controller の追加（モデル追加後にする）
```bash
rails generate controller {モデル名} 
```
`app/controllers`に`{モデル名}\_controllers.rb`が追加される
(なんか自分で関数追加する)
よくわからんからコピペ

routes の追加 (`config/routes.rb`を編集)
resources :{モデル名} この url に飛んできたときにどの関数を読みだすかことが可能かを決める
(よくわからんけどコピペ)

違う Docker container からの接続をしたい場合、`config/environment/development.rb`に以下を追加
```bash
config.hosts << "{docker container の　サービス名}"
```
（いったんやってる）

作成した routes (path) の一覧を見たいとき
```bash
rails routes
```

データベース初期化
```bash
rails db:drop && rails db:create && rails db:migrate
```

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

---
### note
ちがう docker container に情報を送りたい場合
```bash
fetch("http://{送りたい docker container の サービス名}:{外部 docker container のポート番号}/{ruby 側で作成した path}", {送りたいオブジェクト})
```
---
### Mysql 頻出コマンド
- show databases: 

  `database`の名前が表示される

- use {database_name} 

  そのデータベースに注目する

- show tables: 

    データベース内にあるテーブルの一覧を表示

- select * from {table_name}: 

  `table_name`内にあるデータすべてを表示

---

## フロントエンドとバックエンドのやり取り手順

1. **バックエンドでAPIを作成する**

    1.1. **モデルの作成**
    
    Railsでデータベースのテーブルを作成するには、モデルを生成する必要があるよ。以下のコマンドを使ってモデルを作成しよう！

   ```bash
   rails generate model {モデル名} {カラム名1}:{型} {カラム名2}:{型} ...
   ```

    - 例: ユーザー情報を保存するUserモデルを作成する場合

    ```bash
    rails generate model User name:string email:string
    ```

   これで`db/migrate/`ディレクトリにマイグレーションファイルが生成されるよ。

    1.2. **マイグレーションを実行**

    マイグレーションファイルを適用して、データベースにテーブルを作成する。
    ```bash
    rails db:migrate
    ```

    これで`app/models`ディレクトリに`user.rb`が作成されるよ！

    1.3. **コントローラーの作成**

    次に、APIのエンドポイントを作成するためにコントローラーを生成する。
    ```bash
    rails generate controller {モデル名}
    ```

    - 例: `User`モデル用のコントローラーを作成する場合
    ```bash
    rails generate controller Users
    ```

    これで`app/controllers/users_controller.rb`が作成されるよ。ここにAPIのロジックを追加していく！

    1.4. **ルーティングの設定**

    APIのエンドポイントを有効にするために、`config/routes.rb`を編集する。
    ```bash
    resources :{モデル名}
    ```
    - 例: `User`モデル用のルーティングを追加
    ```bash
    resources :users
    ```
    これで、`users`にアクセスするとUsersControllerが呼び出されるようになるよ！


2. **フロントエンドからバックエンドにリクエストを送る**

    ReactからRailsのAPIにリクエストを送るには、`fetch`や`axios`を使うのが一般的だよ。

   `fetch`を使った例

   ```bash
    fetch("http://localhost:3002/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Kurocafe",
        email: "kurocafe@example.com",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
   ```
  - ポイント：
    - `http://{docker service}:3002`はバックエンドのURL（docker-compose.ymlで設定したポート）。
    - `POST`メソッドでデータを送信。
    - `Content-Type: application/json`でJSON形式のデータを送ることを指定。

3. **バックエンドからフロントエンドにデータを返す**

    Railsのコントローラーで、フロントエンドにデータを返すには以下のように書くよ。

   ```bash
    class UsersController < ApplicationController
      def index
        users = User.all
        render json: users
      end
    end
   ```
- ポイント:
  - `render json: users`でデータをJSON形式で返す。
  - フロントエンドで受け取ったデータを表示したり、処理したりできる。

4. **フロントエンドでデータを表示する**

    ReactでRailsから取得したデータを表示する例だよ。

   ```bash
    import React, { useEffect, useState } from "react";

    function App() {
      const [users, setUsers] = useState([]);

      useEffect(() => {
        fetch("http://localhost:3002/users")
          .then((response) => response.json())
          .then((data) => setUsers(data))
          .catch((error) => console.error("Error:", error));
      }, []);

      return (
        <div>
          <h1>Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
   ```

- ポイント
  - `useEffect`でコンポーネントがマウントされたときにデータを取得。
  - `setUsers`で取得したデータをステートに保存。
  - ステートのデータを`map`でリスト表示。

**まとめ**
1. バックエンド:

- モデル、コントローラー、ルーティングを設定してAPIを作成。
- `render json:`でデータを返す。
2. フロントエンド:
- `fetch`や`axios`でAPIにリクエストを送信。
- 取得したデータをReactのステートに保存して表示。