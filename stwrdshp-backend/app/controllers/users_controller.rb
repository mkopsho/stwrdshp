class UsersController < ApplicationController
  wrap_parameters :user, include: [:username, :email, :password]

  def index
    # users = User.all
    # render json: "HI!"
  end

  def create
    user = User.create(user_params)
    if user.save
      payload = { user_id: user.id }
      token = JWT.encode(payload, ENV['JWT_KEY'])
      render json: { user: user, jwt: token }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      payload = { user_id: user.id }
      token = JWT.encode(payload, ENV['JWT_KEY'])
      render json: { user: user, jwt: token, success: "Welcome back, #{user.username}!"}
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end