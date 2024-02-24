defmodule TweeterWeb.Router do
  use TweeterWeb, :router

  pipeline :browser do
    plug(:accepts, ["html"])
    plug(:fetch_session)
    plug(:fetch_live_flash)
    plug(:put_root_layout, html: {TweeterWeb.Layouts, :root})
    plug(:protect_from_forgery)
    plug(:put_secure_browser_headers)
  end

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", TweeterWeb do
    pipe_through(:api)
    get("/login", AuthController, :log_in)
    get("/register", AuthController, :register)
  end

  # Other scopes may use custom stacks.
  # scope "/api", TweeterWeb do
  #   pipe_through :api
  # end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:tweeter, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    live_dashboard("/dashboard", metrics: TweeterWeb.Telemetry)
    forward("/mailbox", Plug.Swoosh.MailboxPreview)
  end
end
