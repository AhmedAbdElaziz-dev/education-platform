import axios from "./axiosInstance";

const coursesEndpoints = {
  progress: "",
  featured: "",
  courses: "",
  performance: "",
};

const courses = {
  getCoursesProgress() {
    return axios.get(coursesEndpoints.progress);
  },
  getFeaturedCourses() {
    return axios.get(coursesEndpoints.featured);
  },
  getCourses() {
    return axios.get(coursesEndpoints.courses);
  },
  getPerformanceChart() {
    return axios.get(coursesEndpoints.performance);
  },
};

export default courses;
