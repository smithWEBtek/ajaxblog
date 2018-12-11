Post.create(title: "The New Dog", content: "He was not a happy dog, having been tied up for long periods of time.")
Post.create(title: "Our Boat", content: "It is a big red boat.")
Post.create(title: "Dinner", content: "We arrived a little early, which caused some awkward silence.")

Comment.create(post_id: 1, content: 'I love all dogs.')
Comment.create(post_id: 1, content: 'We have a good dog.')
Comment.create(post_id: 1, content: 'I am a cat person.')

Comment.create(post_id: 2, content: 'Can we have a picnic on your boat?')
Comment.create(post_id: 2, content: 'Did you paint it red?')
Comment.create(post_id: 2, content: 'There was a Disney cruise ship called the big red boat.')

Comment.create(post_id: 3, content: 'Aunt Jean had begun drinking early as well.')
Comment.create(post_id: 3, content: 'Sara brought her famous cheese cake.')
Comment.create(post_id: 3, content: 'Is there any more guack?')