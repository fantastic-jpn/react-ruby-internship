# Railsのコントローラーで、testsテーブルを操作するためのコントローラーを作成するよ。
# ApplicationControllerを継承してRailsの基本機能を使えるようにするよ。
class TestController < ApplicationController
  # def index
  #   # indexアクション: これはGETリクエストに対して、全てのテストデータを取得するためのアクションだよ。
  #   # Test.all: これはTestモデルを使って、全てのレコードを取得するメソッドだよ。
  #   tests = Test.all
  #   render json: tests
  # end

  # createアクション: POSTリクエストに対して、新しいテストデータを作成するためのアクションだよ。
  def create
    # Testモデルの新しいインスタンスを作成するよ。
    # user_paramsで受け取ったパラメータを使って、Testモデルのインスタンスを初期化するよ。
    test = Test.new(user_params)
    # データベースに保存を試みるよ。
    # 成功したらtrueを返すし、失敗したらfalseを返すよ。
    if test.save
      # 保存に成功した場合は、成功のメッセージをJSON形式で返すよ。
      # renderメソッド: これはRailsのコントローラーで、レスポンスを返すためのメソッドだよ。
      # status: :created: これはHTTPステータスコード201を返すよ。
      render json: { message: "Test created successfully" }, status: :created
    else
      # 保存に失敗した場合は、エラーメッセージをJSON形式で返すよ。
      # status: :unprocessable_entity: これはHTTPステータスコード422を返すよ。
      render json: { errors: test.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def user_params
    # リクエストの中で'test'というキーが含まれていることを確認するよ。
    # .permit(): これは、許可されたパラメータを指定するメソッドだよ。
    # ここでは:user, :pass, :birthdayの3つのパラメータを許可しているよ。
    # これで悪意のあるデータが送信されるのを防ぐことができるよ。
    params.require(:test).permit(:user, :pass, :birthday)
  end
  
end
  