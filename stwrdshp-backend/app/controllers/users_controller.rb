class UsersController < ApplicationController
  wrap_parameters :user, include: [:username, :email, :password]

  def create
    user = User.create(user_params)
    if user.save
      user.lists.create(name: "Liked Parks")
      payload = { user_id: user.id }
      token = JWT.encode(payload, ENV['JWT_KEY'])
      render json: { user: user, jwt: token }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
