class UsersController < ApplicationController
  def create
    #create new user
    user = User.new(user_params)
    if user.save
      render json: { message: "User created successfully" }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    #return all users
    @users = User.all
    render json: @users.as_json(only: [:id, :username, :fieldtype])
  end

  def destroy
    #delete user
    @user = User.find(params[:id])
    if @user.destroy
      render json: {message: "user deleted successfully", user: @user}, status: :ok
    else
      render json: {message: users.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    #return specific user
    @user = User.find(params[:id])
    render json: {user: @user}
  end

  def edit
    #return specific when editting
    @user = User.find(params[:id])
  end
  

  def update
    #update user data
    @user = User.find(params[:id])
      if @user.update(user_params)
        render json: {message: "update successfull", user: @user}, status: :ok
      else
        render json:{message: @user.errors.full_messages}, status: :unprocessable_entity
      end
  end
  
  
  
  

  def user_params
    params.require(:user).permit(:username, :password, :fieldtype)
  end
  
end
