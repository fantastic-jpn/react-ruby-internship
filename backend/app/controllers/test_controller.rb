class TestController < ApplicationController
  def create
    test = Test.new(user_params)
    if test.save
      render json: { message: "Test created successfully" }, status: :created
    else
      render json: { errors: test.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def user_params
    params.require(:test).permit(:user, :pass, :birthday)
  end
  
end
