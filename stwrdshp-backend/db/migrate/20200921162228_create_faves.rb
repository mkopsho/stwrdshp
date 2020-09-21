class CreateFaves < ActiveRecord::Migration[6.0]
  def change
    create_table :faves do |t|
      t.integer :list_id
      t.integer :park_id

      t.timestamps
    end
  end
end
