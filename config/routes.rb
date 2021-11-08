Rails.application.routes.draw do
  
  # resources :complaints
  # resources :school_classes
  # resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  patch "/users/:id", to: "users#update"
  get "/:id/students", to: "users#student_list"
  patch "/teacher/:id/:username", to: "users#update_teacher_id"
  patch '/users/student_list/:id/:subject', to: "users#student_list_by_subject"

  get '/students_without_teachers', to: "users#students_without_teachers"
  post "/complaints/create", to: "complaints#create"
  get '/complaints/all', to: "complaints#complaint_list"

  get "/:id/classes", to: "school_classes#class_list"
  get "/:id/:subject", to: "school_classes#teacher_classes"
  post "/classes/create", to: "school_classes#create"
  get "/:id/homeworks", to: "school_classes#homeworks"
  patch "/school_classes/:id", to: "school_classes#update_hw"
  patch "/school_classes/newGrade/:id/:grade", to: "school_classes#update_grade"
  post "/school_classes/:homework/:subject", to: "school_classes#add_homework"
end
