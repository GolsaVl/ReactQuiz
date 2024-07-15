import imgSrc from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={imgSrc} alt="quiz_logo" />
      <h1>React Quiz</h1>
    </header>
  );
}
