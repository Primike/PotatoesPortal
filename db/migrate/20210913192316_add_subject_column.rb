class AddSubjectColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :school_classes, :subject, :string
  end
end
