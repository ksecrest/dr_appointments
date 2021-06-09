class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :role, inclusion: { in: %w(primary derm ent surgeon cardiologist),
    message: "%{value} is not a valid role", allow_blank: false 
}
end
