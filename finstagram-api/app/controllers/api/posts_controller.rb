class Api::PostsController < ApplicationController
  def index
    render json: Post.all
  end

  def create
    post = get_current_user.posts.build(post_params)
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
