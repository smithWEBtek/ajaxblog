User.create(username: 'ralphy', email: 'ralphy@abc.com')
User.create(username: 'zago', email: 'zago@abc.com')
User.create(username: 'murf', email: 'murf@abc.com')

Post.create(user_id: 1, title: "The New Dog", content: "He was not a happy dog, having been tied up for long periods of time.")
Post.create(user_id: 1, title: "Our Boat", content: "It is a big red boat.")
Post.create(user_id: 1, title: "Dinner", content: "We arrived a little early, which caused some awkward silence.")

Post.create(user_id: 2, title: "Burgers", content: "We started with veggies.")
Post.create(user_id: 2, title: "Ski Trip", content: "Forgot my ski poles again.")
Post.create(user_id: 2, title: "Dog Walk", content: "The dog has an attitude again.")

Post.create(user_id: 3, title: "Attending the Ballet", content: "Have not had the pleasure.")
Post.create(user_id: 3, title: "Using a Seed File", content: "Every Rails app needs one.")
Post.create(user_id: 3, title: "Javascript is your friend", content: "But it starts out as your enemy.")


Comment.create(user_id: 1, post_id: 1, content: 'I love all dogs.')
Comment.create(user_id: 2, post_id: 1, content: 'We have a good dog.')
Comment.create(user_id: 3, post_id: 1, content: 'I am a cat person.')

Comment.create(user_id: 4, post_id: 2, content: 'Can we have a picnic on your boat?')
Comment.create(user_id: 5, post_id: 2, content: 'Did you paint it red?')
Comment.create(user_id: 6, post_id: 2, content: 'There was a Disney cruise ship called the big red boat.')

Comment.create(user_id: 7, post_id: 3, content: 'Aunt Jean had begun drinking early as well.')
Comment.create(user_id: 8, post_id: 3, content: 'Sara brought her famous cheese cake.')
Comment.create(user_id: 9, post_id: 3, content: 'Is there any more guack?')

Comment.create(user_id: 1, post_id: 4, content: 'I will read that book again.')
Comment.create(user_id: 2, post_id: 4, content: 'The almonds are gone now.')
Comment.create(user_id: 3, post_id: 4, content: 'The Mustang was very popular.')

Comment.create(user_id: 4, post_id: 5, content: 'Why do they always yawn when he talks?')
Comment.create(user_id: 5, post_id: 5, content: 'We are meeting friends before the movie.')
Comment.create(user_id: 6, post_id: 5, content: 'It is important to allow the dough to rise.')

Comment.create(user_id: 7, post_id: 6, content: 'Where are we going after this?')
Comment.create(user_id: 8, post_id: 6, content: 'What time is the midnight buffet?')
Comment.create(user_id: 9, post_id: 6, content: 'Do we all have to fill out the same form?')

Comment.create(user_id: 1, post_id: 7, content: 'Harry Chapin recorded the song.')
Comment.create(user_id: 2, post_id: 7, content: 'The desk is solid particle board.')
Comment.create(user_id: 3, post_id: 7, content: 'Vance Refridgeration is there as well.')

Comment.create(user_id: 4, post_id: 8, content: 'The SuperBowl was great.')
Comment.create(user_id: 5, post_id: 8, content: 'Suddenly we have no Internet connection.')
Comment.create(user_id: 6, post_id: 8, content: 'I am ready for more cole slaw')

Comment.create(user_id: 7, post_id: 8, content: 'Cats tend to chew these things.')
Comment.create(user_id: 8, post_id: 8, content: 'If April wants that one, it is fine with me.')
Comment.create(user_id: 9, post_id: 8, content: 'Where do we start the tour?')