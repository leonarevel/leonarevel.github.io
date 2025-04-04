import MyAnimatedBackground from "./MyBackground/MyAnimatedBackground";

function MyBackground({ svg, onAnimationEnd }) {
  return (svg?
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        backgroundColor: 'var(--mui-palette-background)',
      }}
    >
        {svg ? <MyAnimatedBackground src={svg} /> : null}
    </div>
  :null);
}

export default MyBackground;
