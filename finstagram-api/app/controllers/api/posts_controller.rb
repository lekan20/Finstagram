class Api::PostsController < ApplicationController

  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.all
  end

  def create
    binding.pry
    post = Post.new(post_params)
    post.user_id = user_id
    if post.save
      render json: post
    else
      render json: { message: post.errors }, status: 400
    end
  end

  def show
    render json: Post.find_by(id: params[:id])
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: { message: post.errors }, status: 400
    end
  end

  def destroy
    if @post.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this post"}, status: 400
    end
  end

  private

    def set_post
      @post = Post.find_by(id: params[:id])
    end

    def post_params
      params.require(:todo).permit(:img_url, :caption)
    end

end
