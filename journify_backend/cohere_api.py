import cohere
co = cohere.Client('QUibWepznFXzOaIdtUEZC7MyBKhFH23bC4Ho9ZHw')

response = co.generate(
  prompt='My name Jack and I want to visit somewhere that has hiking, beaches, and good food. Recommend me a place to visit as well as an itinerary',
)
# print(response[0].text)
print(response)