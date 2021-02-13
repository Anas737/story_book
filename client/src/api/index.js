const API_URL = "http://localhost:5000/api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // auth
  googleAuth() {
    return this.get("auth/google");
  },

  // story
  createStory(story) {
    return this.post("story/create", story);
  },

  getAllStories() {
    return this.get("story");
  },

  getStory(storyId) {
    return this.get(`story/${storyId}`);
  },

  updateStory(storyId, story) {
    return this.post(`story/${storyId}`, story);
  },

  deleteStory(storyId) {
    return this.delete(`story/${storyId}`);
  },

  post: (route, body) => {
    return this.fetchData(route, {
      method: "POST",
      headers,
      body,
    });
  },
  get: (route) => {
    return this.fetchData(route, {
      method: "GET",
      headers,
    });
  },
  delete: (route) => {
    return this.fetchData(route, {
      method: "DELETE",
      headers,
    });
  },

  fetchData: (route, options) =>
    fetch(`${API_URL}/${route}`, options)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);

        return result;
      })
      .catch((error) => {
        console.log(error);

        return null;
      }),
};
