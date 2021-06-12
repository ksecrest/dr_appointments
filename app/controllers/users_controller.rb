class UsersController < ApplicationController  
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
  end

  def show
    render component: 'User', props: { user: @user, doctors: @user.doctors }
  end

  def new
    @user = User.new
    render component: 'UserNew', props: { user: @user }
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to root_path
    else
      render component: 'UserNew', props: { user: @user }
    end
  end

  def edit
    render component: 'UserEdit', props: { user: @user }
  end

  def update
    if @user.update(user_params)
      redirect_to root_path
    else
      render component: 'UserEdit', props: { user: @user }
    end
  end

  def destroy
    @user.destroy
    redirect_to root_path
  end
  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:full_name, :dob, :email, :address)
    end
end


