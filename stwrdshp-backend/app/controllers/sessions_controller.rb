class SessionsController < ApplicationController
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

  def logout
    render json: 'Log me out!'
  end
end