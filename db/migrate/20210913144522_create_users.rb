class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.references :teacher, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
