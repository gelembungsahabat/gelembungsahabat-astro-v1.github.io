import "./section-bar.css";

const Bar = (props: {
  section: number;
  currentSection: number;
  setCurrentSection: (section: number) => void;
}) => {
  const { section, currentSection, setCurrentSection } = props;
  return (
    <div
      className={
        section === currentSection ? "section-bar-active" : "section-bar"
      }
      onClick={() => setCurrentSection(section)}
    ></div>
  );
};

export const SectionBar = (props: {
  currentSection: number;
  setCurrentSection: (section: number) => void;
  maxSectionIndex: number;
}) => {
  const { currentSection, setCurrentSection, maxSectionIndex } = props;
  const barElements = [];
  for (let i = 0; i < maxSectionIndex + 1; i++) {
    barElements.push(
      <Bar
        section={i}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    );
  }
  return <div className="section-bar-wrapper">{barElements}</div>;
};
