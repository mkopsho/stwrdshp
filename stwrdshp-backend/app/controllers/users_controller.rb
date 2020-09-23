class UsersController < ApplicationController
  wrap_parameters :user, include: [:username, :email, :password, :id]

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

  def show
    user = User.find_by(id: params[:id])
    user_likes = user.lists.first.parks
    render json: user_likes
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :id)
  end
end
