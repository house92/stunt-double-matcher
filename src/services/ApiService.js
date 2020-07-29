export default {
  async patchUser(user, data) {
    return {
      async json() {
        return {
          ...user,
          likedStuntDoubleIds: user.likedStuntDoubleIds.concat(data.likedStuntDoubleId),
        };
      },
    };
  },
}