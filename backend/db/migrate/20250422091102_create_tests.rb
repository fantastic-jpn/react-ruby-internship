class CreateTests < ActiveRecord::Migration[8.0]
  def change
    create_table :tests do |t|
      t.string :user
      t.string :pass
      t.date :birthday

      t.timestamps
    end
  end
end
