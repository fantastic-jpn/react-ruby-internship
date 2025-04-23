# このファイルはデータベースにテーブルを作成するための指示書みたいなものだよ。
# Railsでは、migrationを使ってデータベースの構造を管理するのが基本だよ。
# CreateTests: これはマイグレーションのクラス名で、テーブルを作成するためのクラスだよ。
# ActiveRecord::Migration[8.0]: これはRailsのマイグレーションのバージョンを指定している部分だよ。
# 8.0はRailsのバージョンを示していて、これによりマイグレーションの互換性が保たれるよ。
class CreateTests < ActiveRecord::Migration[8.0]
  # changeメソッド: これはマイグレーションの内容を定義するメソッドだよ。
  # このメソッドの中に、テーブルを作成するための指示を書いていくよ。
  def change
    # create_tableメソッド: これは新しいテーブルを作成するためのメソッドだよ。
    # この|t|はブロック変数で、テーブルのカラムを定義するために使うよ。
    create_table :tests do |t|
      # t.string :user: これはtestsテーブルにuserカラムを追加する指示だよ。
      t.string :user
      # t.string :pass: これはtestsテーブルにpassカラムを追加する指示だよ。
      # passはセキュリティ的に暗号化して保存するのが一般的だよ！
      # bcryptなどのライブラリを使って、パスワードをハッシュ化して保存することが推奨されているよ。
      t.string :pass
      # t.date :birthday: これはtestsテーブルにbirthdayカラムを追加する指示だよ。
      t.date :birthday
      # t.timestamps: これはcreated_atとupdated_atの2つのカラムを自動的に追加する指示だよ。
      t.timestamps
    end
  end
end

# rails db:migrate: これはマイグレーションを実行するためのコマンドだよ。
# このコマンドを実行すると、上記のマイグレーションが実行されて、testsテーブルがデータベースに作成されるよ。
# もし、マイグレーションを実行した後にテーブルの構造を変更したい場合は、新しいマイグレーションを作成して、その中で変更を定義するよ。