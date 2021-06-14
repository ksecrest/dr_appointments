class RemoveColumnDateAndTimeFromAppointments < ActiveRecord::Migration[6.1]
  def change
    remove_column :appointments, :date, :string
    remove_column :appointments, :time, :string
  end
end
