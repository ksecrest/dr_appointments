class Doctor < ApplicationRecord
    has_many :appointments, dependent: :destroy
    has_many :users, through: :appointments

    validates :dr_name, presence: true
end
