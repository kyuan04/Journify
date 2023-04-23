import cohere

def generate_text(prompt):
    co = cohere.Client('QUibWepznFXzOaIdtUEZC7MyBKhFH23bC4Ho9ZHw') # This is your trial API key
    response = co.generate(
      model='command-xlarge-nightly',
      prompt=prompt,
      max_tokens=1100,
      temperature=0.3,
      k=0,
      stop_sequences=[],
      return_likelihoods='NONE')
    return response.generations[0].text

