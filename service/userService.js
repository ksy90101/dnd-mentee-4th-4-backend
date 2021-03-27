const { User } = require('../models');

const isExistUser = async (currUserProfileId) => {
  try {
    return await User.findOne({
      where: { profileId: currUserProfileId },
    });
  } catch (err) {
    console.error(err);
    return -1;
  }
};

const createUser = async ({ email, nickname, provider, profileId }) => {
  try {
    await User.create({ email, nickname, provider, profileId });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  isExistUser,
  createUser,
};
