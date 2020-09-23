class ListsController < ApplicationController
  def update
    user = User.find_by(username: params[:username])
    Fave.create(list_id: user.lists.first.id, park_id: params[:park_id])
    render json: "List create endpoint!"
  end
end
