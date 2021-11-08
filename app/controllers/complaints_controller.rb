class ComplaintsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    skip_before_action :studentAuthorize, only: :create

    def complaint_list
        user = User.find_by(id: session[:user_id])
        all_complaints = Complaint.find(user_id: user.id)
        render json: all_complaints
    end
    
    def create
        new_complaint = Complaint.create!(complaint_params)
        render json: new_complaint
    end

    private
    def complaint_params
        params.permit(:name, :experience, :complaint, :user_id)
    end

    def not_found
        render json: {error: "Not found"}, status: :not_found 
    end
end
