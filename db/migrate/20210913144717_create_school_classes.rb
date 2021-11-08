class CreateSchoolClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :school_classes do |t|
      t.integer :grade
      t.belongs_to :user, null: false, foreign_key: true
      t.string :homeworks, array: true

      t.timestamps
    end
  end
end
