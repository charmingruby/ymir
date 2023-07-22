defmodule Ymir.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Telemetry supervisor
      YmirWeb.Telemetry,
      # Start the Ecto repository
      Ymir.Repo,
      # Start the PubSub system
      {Phoenix.PubSub, name: Ymir.PubSub},
      # Start Finch
      {Finch, name: Ymir.Finch},
      # Start the Endpoint (http/https)
      YmirWeb.Endpoint
      # Start a worker by calling: Ymir.Worker.start_link(arg)
      # {Ymir.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Ymir.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    YmirWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
