class ListsController < ApplicationController
  def update
    user = User.find_by(username: params[:username])
    fave_join = Fave.create(list_id: user.lists.first.id, park_id: params[:park_id])
    render json: fave_join
  end
end
