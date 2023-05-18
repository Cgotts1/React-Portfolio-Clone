import colorChanger from "./images/color-changer.png"
import readmeGenerator from "./images/readme-generator.png"
import teamProfileGenerator from "./images/team-profile-generator.png"
import fitnessPlan from "./images/fitness-plan.png"
import gamerMatch from "./images/gamer-match.png"
import techBlog from "./images/tech-blog.png"
import noteTaker from "./images/note-taker.png"
import spotifyAssistant from "./images/spotify-assistant.png"


export const projects = [
    {
      projectName: 'Film Finder',
      projectGitHub: 'https://github.com/Cgotts1/API-Project',
      projectSite:'https://cgotts1.github.io/Film-Finder/',
      projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/film-finder.jpg',
      projectSummary: "A movie search web application that utilizes two APIs and local storage to render a movie's information and its respective movie poster.",
      projectTech: "🛠 HTML | CSS | JS Bootstrap | APIs: OMDB & TMDB",
    },
    {
      projectName: 'Quote Generator',
      projectGitHub: 'https://github.com/Cgotts1/Quote-Generator',
      projectSite:'https://cgotts1.github.io/Quote-Generator/',
      projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/quote-generator.jpg',
      projectSummary: 'The Ron Swanson quote generator offers a selection of over 50 quotes, randomly generating one at a time.',
      projectTech: "🛠 HTML | CSS | JS",
    },
    {
      projectName: 'Weather Dashboard',
      projectGitHub: 'https://github.com/Cgotts1/Weather-Dashboard',
      projectSite:'https://cgotts1.github.io/Weather-Dashboard/',
      projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/weather-dashboard.jpg',
      projectSummary: "A weather dashboard that utilizes Openweathermap's API to retrieve weather information for a five day forecast.",
      projectTech: "🛠 HTML | CSS | JS | Bootstrap API: Openweathermap",
    },
    {
      projectName: 'Work Day Scheduler',
      projectGitHub: 'https://github.com/Cgotts1/Work-Day-Scheduler',
      projectSite:'https://cgotts1.github.io/Work-Day-Scheduler/',
        projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/work-day-scheduler.jpg',
        projectSummary: "A scheduler application that allows a user to save events for each hour of the day. Each time block will default to a certain color depending on whether the time is past, present, or future.",
        projectTech: "🛠 HTML | CSS | JS | Bootstrap Moment.js | jquery",
      },
      {
        projectName: 'Password Generator',
        projectGitHub: 'https://github.com/Cgotts1/Password-Generator',
        projectSite:'https://cgotts1.github.io/Password-Generator/',
        projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/password-generator.jpg',
        projectSummary: "Generate a random password based on criteria a user has selected.",
        projectTech: "🛠 HTML | CSS | JS",
      },
      {
        projectName: 'Anthropology Quiz',
        projectGitHub: 'https://github.com/Cgotts1/Anthropology-Quiz',
        projectSite:'https://cgotts1.github.io/Anthropology-Quiz/',
        projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/anthropology-quiz.jpg',
        projectSummary: "A timed coding quiz consisting of multiple-choice questions and user highscores.",
        projectTech: "🛠 HTML | CSS | JS",
      },
      {
        projectName: 'Color Changer',
        projectGitHub: 'https://github.com/Cgotts1/color-changer',
        projectSite:'https://cgotts1.github.io/Color-Changer/',
        projectImage: `${colorChanger}`,
        projectSummary: "This JavaScript application comprises of 100 squares that are designed to change their color randomly when a hovered over or if a specific square is clicked.",
        projectTech: "🛠 HTML | CSS | JS",
      },
      {
        projectName: 'Flash Cards',
        projectGitHub: 'https://github.com/Cgotts1/JS-Flash-Cards',
        projectSite:'https://cgotts1.github.io/JS-Flash-Cards/',
        projectImage: 'https://cgotts1.github.io/V4-Portfolio/images/flash-cards.jpg',
        projectSummary: "An application that allows users to create and delete flash cards. Upon returning to the application, the users previously created cards will populate through use of local storage. Tutorial by: Web Dev Tutorials https://youtu.be/wtqbOFYivxw",
        projectTech: "🛠 HTML | CSS | JS",
      },
      {
        projectName: 'Readme Generator',
        projectGitHub: 'https://github.com/Cgotts1/readme-generator',
        projectSite:'https://drive.google.com/file/d/1nTql6j8v9ov0MurceNV8lzc9ybklxvvY/view',
        projectImage: `${readmeGenerator}`,
        projectSummary: "Quickly and easily generate a README file by using a command-line application. This allows the user to devote more time working on the project.",
        projectTech: "🛠 HTML | CSS | JS Node.js | Inquirer",
      },
      {
        projectName: 'Team Profile Generator',
        projectGitHub: 'https://github.com/Cgotts1/Team-Profile-Generator',
        projectSite:'https://drive.google.com/file/d/1h6JLU5_bIjOT5hWXo3d54XxKFUUBkfhP/view',
        projectImage: `${teamProfileGenerator}`,
        projectSummary: "A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person.",
        projectTech: "🛠 HTML | CSS | JS Node.js | Inquirer",
      },
      {
        projectName: 'Fitness Plan',
        projectGitHub: 'https://github.com/Ryan-M-Taylor/Fitness-Plan',
        projectSite:'https://protected-woodland-15218.herokuapp.com/',
        projectImage: `${fitnessPlan}`,
        projectSummary: "A fitness application allowing users to make an account and create a weekly workout routine that tracks their physical activities and time spent exercising.",
        projectTech: "🛠 HTML | CSS | JS | Chart.js Bootstrap | MySQL | Express",
      },
      {
        projectName: 'Gamer Match',
        projectGitHub: 'https://github.com/Ryan-M-Taylor/Gamer-Match',
        projectSite:'https://peaceful-brook-99319.herokuapp.com/',
        projectImage: `${gamerMatch}`,
        projectSummary: "A gaming social media application where users can go to connect with fellow gamers with similar interests. Users can toggle between different console forums, add friends, and post comments.",
        projectTech: "🛠 HTML | CSS | JS | MongoDB Express | React.js | Node.js",
      },
      {
        projectName: 'Tech Blog',
        projectGitHub: 'https://github.com/Cgotts1/Tech-Blog',
        projectSite:'https://Tech-blog-cgotts1.herokuapp.com/',
        projectImage: `${techBlog}`,
        projectSummary: "A Tech blog application that allows users to make an account and engage with other users through creating and commenting on posts.",
        projectTech: "🛠 HTML | CSS | JS | MySQL | Express Handlebars.js",
        // projectTech: (
        //   <div>
        //     🛠 HTML | CSS | JS | Bootstrap
        //     <br />
        //     APIs: OMDB & TMDB
        //   </div>
        // ),
      },
      {
        projectName: 'Note Taker Responsive',
        projectGitHub: 'https://github.com/Cgotts1/Note-Taker-Responsive',
        projectSite:'https://note-taker-responsive.herokuapp.com/',
        projectImage: `${noteTaker}`,
        projectSummary: "A note taking application that is user-friendly, responsive, and efficient in storing and managing notes using Express and Node.js technologies.",
        projectTech: "🛠 HTML | CSS | JS Express | Node.js",
      },
      {
        projectName: 'Spotify Assistant',
        projectGitHub: 'https://github.com/Cgotts1/Spotify-Assistant/tree/main/spotify-assistant',
        projectSite:'https://drive.google.com/file/d/1fKRlz5XUOwaJzY1eqUogHfDwFMKnGTex/view',
        projectImage: `${spotifyAssistant}`,
        projectSummary: "An application currently in development that will allow users search for music from their favorite artists and create playlists that will be saved to their Spotify account.",
        projectTech: "🛠 HTML | CSS | JS | React.js | API: Spotify Web API",
      },
  ]
