class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :dr_name

      t.timestamps
    end
  end
end
