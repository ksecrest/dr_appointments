class AppointmentsController < ApplicationController
  before_action :set_doctor
  before_action :set_appointment, only:[:show, :edit, :update, :destroy]

  def index
    @appointments = @doctor.appoointments
    render component: 'Appointments', props: { appointments: @appointments, doctor: @doctor}
  end

  def show
    render component: 'Appointment', props: { appointment: @appointment, doctor: @doctor }
  end

  def new
    @appointment = @doctor.appointment.new
    render component: 'AppointmentNew', props: { appointment: @appointment, docotor: @docotor }
  end
  
  def create
    @appointment = @doctor.appointments.new(appointment_params)
    if @appointment.save
      redirect_to doctor_appointments
    else
      render component: 'AppointmentNew', props: { appointment: @appointment, doctor: @doctor }
    end
  end

  def edit
    render component: 'AppointmentEdit', props: { appointment: @appointment, doctor: @doctor }
  end

  def update
    if @appointment.update(appointment_params)
      redirect_to doctor_appointments
    else
      render component: 'AppointmentEdit', props: { appointment: @appointment, doctor: @doctor}
    end
  end

  def destroy
    @appointment.destroy
    redirect_to doctor_appointments
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:doctor_id])
    end

    def set_appointment
      @appointment = Appointment.find(params[:id])
    end

    def appointment_params
      params.require(:appointment).permit(:date, :time)
    end
end
