# テストクラス：これはtestテーブルと対応するモデルだよ。
# Railsでは、モデル名は単数形で、テーブル名は複数形になるのがルール！
# ここでは、ActiveRecordを使ってデータベースの操作を簡単にするためのクラスを定義しているよ。
# Railsのモデルの基本機能を継承しているよ。
class Test < ApplicationRecord
  # validates: これは「バリテーション（データの検証）」を設定している部分だよ！
  # ':user' : testテーブルのuserカラムに対してバリデーションを設定しているよ。
  # 'presence: true' : userカラムが空(nilや空白文字列)でないことを確認するバリデーションだよ。
  # 'uniqueness: true' : userカラムの値が他のレコードと重複していないことを確認するバリデーションだよ。
  validates :user, presence: true, uniqueness: true

  # 注意点！
  # passはセキュリティ的に暗号化して保存するのが一般的だよ！
  # bcryptなどのライブラリを使って、パスワードをハッシュ化して保存することが推奨されているよ。
  validates :pass, presence: true
  validates :birthday, presence: true

  # 必要に応じて、他のバリデーションも追加できるよ！
  # 例えば、birthdayが過去の日付であることを確認するバリデーションなども考えられるよ。
  # validates :birthday, comparison: { less_than: Date.today }
end
