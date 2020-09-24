class ListsController < ApplicationController
  def update
    user = User.find_by(username: params[:username])
    fave_join = Fave.create(list_id: user.lists.first.id, park_id: params[:park_id])
    render json: fave_join
  end

  def delete
    user = User.find_by(username: params[:username])
    fave_join = user.lists.first.faves.find_by(park_id: params[:park_id])
    fave_join.delete
    user_likes = user.lists.first.parks
    render json: user_likes
  end
end
