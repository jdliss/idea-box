class Api::V1::IdeasController < ApiController
  def create
    @idea = Idea.new(idea_params)

    if @idea.save
      respond_with @idea, status: 200, location: nil
    else
      respond_with @idea, status: 400, location: nil
    end
  end

  def update
    idea = Idea.find(params[:id])
    params[:body] ? idea.update(body: params[:body]) : idea.update(title: params[:title])
    idea.save
    respond_with idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private
  
  def idea_params
    params.permit(:title, :body)
  end
end
