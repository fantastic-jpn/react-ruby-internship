class CorpsController < ApplicationController

  def create
    @corp = Corp.new(corp_params)
    if @corp.save
      render json: {message: "created successfully"}, status: :created
    else
      render json: {message: @corp.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def login
    @corp = Corp.find_by(username: corp_params[:username])
    if @corp
      if @corp.name == corp_params[:name]
        render json: {message: "account verified", corp: @corp.as_json(only: [:id, :username, :name])}, status: :ok
      else
        render json: {message: "mismatch username or corporation name"}, status: :unprocessable_entity 
      end
    else
      render json: {message: "no account found"}, status: :unauthorized
    end
  end

  private

  def corp_params
    params.require(:corp).permit(:username, :name, :fieldtype)
  end
end
