class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = Post.new(todo_params)
    post.user_id = get_current_user.id
    post.save

    render json: post
  end

  def destroy
    post = post.find(params[:id])
    post.destroy

    render json: post
  end

  private

  def todo_params
    params.require(:todo).permit(
        :img_url,
        :caption
      )
  end
end
