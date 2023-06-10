defmodule Island do
  @moduledoc """
  Eden is full of beautiful islands...
  """

  defstruct [:name, :length, :width, :features]

  def new(props) do
    %__MODULE__{
      name: props[:name],
      length: props[:length],
      width: props[:width],
      features: props[:features]
    }
  end
  
  def area(island) do
    calc_area(island)
  end

  defp calc_area(island) do
    island.length * island.width
  end
end

# ...one of them is named Elysian

elysian = Island.new(
  name: "Elysian",
  length: 300,
  width: 350,
  features: ["Sunsets", "Beaches"]
)
