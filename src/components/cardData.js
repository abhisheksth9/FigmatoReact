import react from "../assets/logo/react.svg";
import likes from "../assets/logo/likes.svg";
import vue from "../assets/logo/vue.svg";
import pen from "../assets/logo/pen.svg";

export const cardData = {
  all: {
    title: "All Courses",
    count: "23",
    description: "courses you are powering through right now.",
    icons: [react, likes, vue, pen],
  },

  upcoming: {
    title: "Upcoming Courses",
    count: "05",
    description: "exciting new courses waiting to boost your skills.",
    icons: [react, likes, vue, pen],
  },

  ongoing: {
    title: "Ongoing Courses",
    count: "10",
    description: "currently happening—don’t miss out on the action!",
    icons: [react, likes, vue, pen],
  },
};

export default cardData