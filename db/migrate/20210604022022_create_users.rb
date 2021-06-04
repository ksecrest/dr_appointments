class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :dob
      t.string :contact_info

      t.timestamps
    end
  end
end
