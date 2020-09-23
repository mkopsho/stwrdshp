class ListsController < ApplicationController
  def index
    # lists = List.all
    render json: "List index endpoint!"
  end

  def update
    user = User.find_by(username: params[:username])
    Fave.create(list_id: user.lists.first.id, park_id: params[:park_id])
    render json: "List create endpoint!"
  end
end
