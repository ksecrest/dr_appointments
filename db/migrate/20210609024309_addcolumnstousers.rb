class Addcolumnstousers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :contact_info
    add_column :users, :address, :string
    add_column :users, :email, :string
  end
end
