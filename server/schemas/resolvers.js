
const { User, Card } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('savedCards')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {

            const user = await User.create(args);
            console.log(user)
            const token = signToken(user);

            return { token, user };
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveCard: async (parent, { card }, context) => {
            if (context.user) {
                // const updatedUser = await User.findOneAndUpdate(
                //     { _id: context.user._id },
                //     { $addToSet: { savedCards: card } },
                //     { new: true }
                // );

                //Create card separately; Saves the entire card then saves the cardID to the user;
                const cardData = await Card.create(card);
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedCards: cardData._id } },
                    { new: true }
                );
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!')
        },

        removeCard: async (parent, { cardId }, context) => {
            if (context.user) {
                const cardData = await Card.deleteOne({_id: cardId})
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedCards: cardId } },
                    { new: true }
                );

                return updatedUser;
            }

            // throw new AuthenticationError('You need to be logged in!')
        }
    }
};

module.exports = resolvers;


