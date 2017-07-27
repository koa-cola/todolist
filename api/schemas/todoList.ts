export const todoListSchema = function(mongoose) {
  return {
    completed: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      required: true
    }
  };
};
