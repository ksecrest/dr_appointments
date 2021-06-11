class User < ApplicationRecord
    # user is the co-parent with doctors of appointments
    has_many :appointments, dependent: :destroy
    has_many :doctors, through: :appointments

    validates :full_name, :dob, :address, :email, presence: true
end
