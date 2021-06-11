roles = ['primary', 'derm', 'ent', 'surgeon', 'cardiologist' ]
5.times do
    doctor = Doctor.create(
        dr_name: Faker::Name.last_name 
    )
        

    5.times do 
        user = User.create(
            full_name: Faker::Name.name,
            dob: Faker::Date.birthday,
            address: Faker::Address.full_address
            email: Faker::Internet.safe_email
        )
    end
            

    Appointment.create(
        role: roles.sample,
        date: Faker::Date.between(from: Date.today, to: 1.year.from_now),
        time: Faker::Time,
        doctor_id: doctor.id,
        user_id: user.id   
    )
end
end

puts 'Data Seeded'




