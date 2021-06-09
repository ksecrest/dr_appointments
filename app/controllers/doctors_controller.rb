class DoctorsController < ApplicationController
  
  before_action :set_doctor, only:[:show, :edit, :update, :destroy]
  def index
    @doctors = Doctor.all
    render component: 'Doctors', props: { doctors: @doctors }
  end

  def show
    render component: 'Doctor', props: { doctor: @doctor}
  end

  def new
    @doctor = doctor.new
    render componet: 'DoctorNew', props: { doctor: @doctor }
  end 

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      redirect_to root_path
    else
      render component: 'DoctorNew', props: { doctor: @doctor }
    end
  end

  def edit
    render component: 'DoctorEdit', props: { doctor: @doctor }
  end
  
  def update
    if @doctor.update(doctor_params)
      redirect_to root_path
    else
      render component: 'DoctorEdit', props: { doctor: @doctor }
    end
  end

  def destroy
    @doctor.destroy
    redirect_to root_path
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    def doctor_params
      params.require(:doctor).permit(:dr_name)
    end
end
