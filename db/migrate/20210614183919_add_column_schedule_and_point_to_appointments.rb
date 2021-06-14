class AddColumnScheduleAndPointToAppointments < ActiveRecord::Migration[6.1]
  def change
    add_column :appointments, :schedule, :date
    add_column :appointments, :point, :time
  end
end
