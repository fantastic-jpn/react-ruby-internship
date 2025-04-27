class CreateCorps < ActiveRecord::Migration[8.0]
  def change
    create_table :corps do |t|
      t.string :username
      t.string :name
      t.string :fieldtype

      t.timestamps
    end
  end
end
