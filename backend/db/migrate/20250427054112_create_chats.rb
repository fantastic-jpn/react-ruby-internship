class CreateChats < ActiveRecord::Migration[8.0]
  def change
    create_table :chats do |t|
      t.text :message
      t.references :users, null: false, foreign_key: true
      t.references :corps, null: false, foreign_key: true

      t.timestamps
    end
  end
end
