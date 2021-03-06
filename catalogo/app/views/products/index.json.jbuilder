json.array!(@products) do |product|
  json.extract! product, :id, :name, :trademark, :ecolabels
  json.url product_url(product, format: :json)
end
