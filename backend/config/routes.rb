# ルーティングの定義が始まるよ！
# このブロックの中にルーティングを定義していくよ！
# ルーティングは、HTTPリクエストをコントローラのアクションにマッピングするためのものだよ！
Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "posts#index"

  # resources :users: これでusersリソースに対すルーティングを定義するよ！
  # only: [:edit, :update, :show, :create]: これで、edit, update, show, createの4つのアクションだけをルーティングするよ！
  # edit: ユーザー情報の編集画面を表示するアクションだよ。(GET /users/:id/edit)
  # update: ユーザー情報を更新するアクションだよ。(PATCH /users/:id)
  # show: ユーザー情報を表示するアクションだよ。(GET /users/:id)
  # create: 新しいユーザーを作成するアクションだよ。(POST /users)
  resources :users, only: [:edit, :update, :show, :create]
  resources :tests, only: [:edit, :update, :show, :create]

end
