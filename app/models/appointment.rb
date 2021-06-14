class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :role, :schedule, :point, presence: true
  validates :schedule, :point, uniqueness: true
  validates :role, inclusion: { in: %w(nurse patient doctor),
    message: "%{value} is not a valid role", allow_blank: true 
  }
end
