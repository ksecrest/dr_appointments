roles = ['doctor', 'nurse', 'patient']
10.times do
    doct = Doctor.create(
        dr_name: Faker::Name.last_name
    )
    10.times do
        u = User.create(
            full_name: Faker::Name.name,
            dob: Faker::Date.birthday,
	@@ -13,31 +13,17 @@

        Appointment.create(
            role: roles.sample,
            schedule: Faker::Date.between(from: Date.today, to: 1.year.from_now),
            point: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :short),
            doctor_id: doct.id,
            user_id: u.id
        )
    end
end

puts 'Data Seeded'
