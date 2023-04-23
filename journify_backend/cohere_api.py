import cohere

def generate_text(prompt):
    co = cohere.Client('QUibWepznFXzOaIdtUEZC7MyBKhFH23bC4Ho9ZHw') # This is your trial API key
    response = co.generate(
      model='command-xlarge-nightly',
      prompt=prompt,
      max_tokens=600,
      temperature=0.9,
      k=0,
      stop_sequences=[],
      return_likelihoods='NONE')
    return response.generations[0].text

# text = generate_text("Give me an idea for traveling. I enjoy hiking, beaches, and great food. I also like sunny places and am looking to visit during the summer time. Could you give me a detailed itinerary for a specific city or location?")
# print(text)
