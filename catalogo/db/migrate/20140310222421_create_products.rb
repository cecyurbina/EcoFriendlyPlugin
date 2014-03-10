class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :trademark
      t.string :ecolabels

      t.timestamps
    end
  end
end
