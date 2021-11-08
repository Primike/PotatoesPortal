class AddComplaintsColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :complaints, :text, array: true
  end
end
