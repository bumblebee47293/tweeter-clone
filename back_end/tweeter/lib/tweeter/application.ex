defmodule Tweeter.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      TweeterWeb.Telemetry,
      Tweeter.Repo,
      {DNSCluster, query: Application.get_env(:tweeter, :dns_cluster_query) || :ignore},
      {Phoenix.PubSub, name: Tweeter.PubSub},
      # Start the Finch HTTP client for sending emails
      {Finch, name: Tweeter.Finch},
      # Start a worker by calling: Tweeter.Worker.start_link(arg)
      # {Tweeter.Worker, arg},
      # Start to serve requests, typically the last entry
      TweeterWeb.Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Tweeter.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    TweeterWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
