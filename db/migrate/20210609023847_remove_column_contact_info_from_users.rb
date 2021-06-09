class RemoveColumnContactInfoFromUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :contact_info, :string
  end
end
