defmodule Ymir.Repo do
  use Ecto.Repo,
    otp_app: :ymir,
    adapter: Ecto.Adapters.Postgres
end
