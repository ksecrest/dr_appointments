class Doctor < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments

    validates :dr_name, presence: true
end
