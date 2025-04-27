class ChatsController < ApplicationController
  def create
    @chat = Chat.new(chat_create_params)
    if @chat.save
      render json: {message: "message saved", chat: @chat.as_json(only: [:message, :corps_id])}, status: :created
    else
      render json: {message: @chat.errors.full_messages}, status: :unprocessable_entity
    end
  end

  # def index
  #   @chats = Chat.where(userid: chat_search_params[:userid], corpid: chat_search_params[:corpid])
  #   render json: @chats.as_json(only: [:message, :userid, :corpid]), status: :ok
  # end

  def show 
    @chats = Chat.where(users_id: chat_search_params[:users_id], corps_id: chat_search_params[:corps_id])
    if @chats.any?
      render json: @chats.as_json(only: [:message, :users_id, :corps_id]), status: :ok
    else
      render json: {message: "no chats found"}, status: :not_found
    end
  end

  private 

  def chat_create_params
    params.require(:chat).permit(:message, :users_id, :corps_id)
  end

  def chat_search_params
    params.require(:chat).permit(:users_id, :corps_id)
  end
end
