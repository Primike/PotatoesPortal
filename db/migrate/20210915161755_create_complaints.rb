class CreateComplaints < ActiveRecord::Migration[6.1]
  def change
    create_table :complaints do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.boolean :experience
      t.text :complaint
      t.string :name

      t.timestamps
    end
  end
end
