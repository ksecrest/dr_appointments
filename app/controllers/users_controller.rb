class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
  end

  def show
  end

  def new
  end
end
