class AddPhoneNumberAndEmailAndAddressToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :phone_number, :string
    add_column :users, :email, :string
    add_column :users, :address, :string
  end
end
