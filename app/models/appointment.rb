class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :role, inclusion: { in: %w(doctor nurse patient),
    message: "%{value} is not a valid role", allow_blank: false 
}
  validates :role, :schedule, :point, presence: true
  validates :schedule, uniqueness: true
end
