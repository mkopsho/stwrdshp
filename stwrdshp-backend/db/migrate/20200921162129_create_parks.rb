class CreateParks < ActiveRecord::Migration[6.0]
  def change
    create_table :parks do |t|
      t.string :name
      t.text :description
      t.string :state
      t.decimal :lat
      t.decimal :long
      t.integer :list_id

      t.timestamps
    end
  end
end
