import axios from "./axiosInstance";

const coursesEndpoints = {
  progress: "users",
  featured: "users",
  courses: "users",
  performance: "users",
  course: "users",
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
  getCourseById(id) {
    return axios.get(`${coursesEndpoints.courses}/${id}`);
  },
};

export default courses;
