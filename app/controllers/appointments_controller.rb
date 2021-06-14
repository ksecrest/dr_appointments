class AppointmentsController < ApplicationController
  before_action :set_doctor
  before_action :set_user
  before_action :set_appointment, only:[:show, :edit, :update, :destroy]

  def index
    @doctors = @doctor.appointments.where(role: 'doctor')
    @nurses = @doctor.appointments.where(role: 'nurse')
    @patients = @doctor.appointments.where(role: 'patient')
    @appointments = Appointment.all
    render component: 'Appointments', props: {
      doctors: @doctors,
      nurses: @nurses,
      patients: @patients,
      users: User.all,
      appointments: @appointments,
      doctor: @doctor,
      userss: @users
    }
  end

  def show
    render component: 'Appointment', props: { appointment: @appointment, doctor: @doctor }
  end

  def new
    @appointment = @doctor.appointments.new
    render component: 'AppointmentNew', props: { appointment: @appointment, doctor: @doctor, users: @users }
  end

  
  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments_path
    else
      render component: 'AppointmentNew', props: { appointment: @appointment, doctor: @doctor, users: @users }
    end
  end

  def edit
    render component: 'AppointmentEdit', props: { appointment: @appointment, doctor: @doctor, users: @users }
  end

  def update
    if @appointment.update(appointment_params)
      redirect_to doctor_appointments
    else
      render component: 'AppointmentEdit', props: { appointment: @appointment, doctor: @doctor, users: @users}
    end
  end

  def destroy
    @appointment.destroy
    redirect_to doctor_appointments_path
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    def set_user
      @users = User.all - @doctor.users
    end

    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    def appointment_params
      params.require(:appointment).permit(:schedule, :point, :role, :user_id)
    end
end
 