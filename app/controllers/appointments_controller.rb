class AppointmentsController < ApplicationController
  
  before_action :set_doctor
  before_action :set_appointment, only:[:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
    render component: 'Appointments', props: { appointments: @appointments, doctors: @doctors}
  end

  def show
    render component: 'Appointment', props: { appointment: @appointment, doctor: @doctor }
  end

  def new
    @appointment = Appointment.new
    render component: 'AppointmentNew', props: { appointment: @appointment, docotor: @docotor }
  end
  
  def create
    @user = User.all - @doctor.users
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to root_path
    else
      render component: 'AppointmentNew', props: { appointment: @appointment, user: @user, doctor: @doctor }
    end
  end

  def show

  end

  def edit

  end

  
  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    def appointment_params
      params.require(:appointment).permit(:date, :time)
    end
end
