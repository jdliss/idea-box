class Api::V1::DownvotesController < ApiController
  def create
    respond_with Idea.downvote(params[:id]), location: nil
  end
end
