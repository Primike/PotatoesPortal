class UsersController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found
    # skip_before_action :teacherAuthorize, only: :create
    skip_before_action :studentAuthorize, only: [:create]
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else 
            render json: {error: "Not authorized"}, status: :unauthorized 
        end
    end

    def student_list
        teacher = User.find(params[:id])
        students = teacher.students
        render json: students
    end

    def student_list_by_subject
        teacher = User.find(params[:id])
        students = teacher.students
        found_class = {};
        students.each {|student|
            student.school_classes.each{|current_class| 
                # if current_class.subject.downcase == params[:subject].downcase {
                #     found_class = current_class
                # }
                
                if current_class.subject.downcase == params[:subject].downcase
                    found_class = current_class
                    found_class.homeworks.delete(params[:deleted])
                    found_class.save
                end
            }
        }
        render json: students
    end

    def find_all_teachers
        allTeachers = User.all.where(is_teacher: true)
        render json: allTeachers
    end

    def update 
        user = User.find(params[:id])
        user.update(user_params)
        render json: user
    end

    def students_without_teachers
        students= User.all.where(is_teacher: false).where(teacher_id: nil)
        render json: students
    end

    def update_teacher_id
        teacher = User.find(params[:id])
        # User.find_by(username: params[:username]).update!(teacher_id: params[:id])
        student = User.find_by(username: params[:username])
        student.update(teacher_id: params[:id])
        students = teacher.students
        render json: students
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :is_teacher, :teacher_id, :complaints, :avatar)
    end

    def not_found
        render json: {error: "Not found"}, status: :not_found
    end

end
